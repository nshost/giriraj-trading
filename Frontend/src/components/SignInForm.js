import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/SignInForm.css';

const SignInForm = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSignIn = async () => {
    try {
      const response = await fetch('https://backend-oqbd.onrender.com/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const { token } = data;
        localStorage.setItem('userToken', token);
        onSignIn(email);
        toast.success('Sign in successful!');
      } else {
        console.error('Sign in failed:', data.error);
        toast.error('Sign in failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during sign in:', error);
      toast.error('An unexpected error occurred. Please try again.');
    }
  };
  
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleInputChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" onChange={handleInputChange} />
        </Form.Group>

        <Button className="learn-more-button" type="button" onClick={handleSignIn}>
          Sign In
        </Button>

        <Row className="mt-3">
          <Col>
            {/* <a href="/forgotPassword" className="forgot-password-link">
              Forgot Password?
            </a> */}
          </Col>
          <Col className="text-right">
            <a href="/signup" className="create-account-link">
              Create New Account
            </a>
          </Col>
        </Row>
       
      </Form>
      <ToastContainer />
    </>
  );
};

export default SignInForm;

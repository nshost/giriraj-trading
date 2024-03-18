import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import forgotimg from '../img/SignUpPageimg.svg';

import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = ({ onSignUp }) => {
  const navigate = useNavigate();
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
    companyName: '',
    gstNumber: '',
  });

  const handleInputChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignUp = () => {
    // For simplicity, you can just log the user data for now
    console.log('User:', user);
    // Assuming successful sign-up, pass the email to the parent component
    onSignUp(user.email);
    toast.success('Sign up successful!');
  };
  return (
    <Container>
      <Row className="justify-content-md-center align-items-center">
        <Col md={6}>
          <img src={forgotimg} alt="SignUpPageImage" className="img-fluid" />
        </Col>

        <Col md={6}>
          <h2 className="mt-5 mb-3">Sign Up</h2>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="cpassword"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formCompanyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Company Name"
                name="companyName"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formgstno">
              <Form.Label>GST Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your GST Number/Pan Card Number"
                name="gstNumber"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label={<span>I agree to the <Link to="/terms_and_conditions">Terms and Conditions</Link></span>}
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
              />
            </Form.Group>

            <Button className="learn-more-button" type="button" onClick={handleSignUp}>
              Sign Up
            </Button>

            <Row className="mt-3">
              <Col>
                <p className="already-have-account-text">
                  Already have an account? <Link to="/signIn">Sign In</Link>
                </p>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default SignUpPage;

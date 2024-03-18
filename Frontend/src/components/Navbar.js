import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown, Modal } from 'react-bootstrap';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import Logo from './logo.png';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { Link } from 'react-router-dom';
import { useQuote } from './QuoteContext';  // Import the useQuote hook

const CustomNavbar = ({  isLoggedIn, isSignedUp, userEmail, onSignIn, onSignOut, onSignUp  }) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  
  useEffect(() => {
    // Check if the user is not logged in and show the SignIn modal accordingly
    if (!isLoggedIn) {
      setShowSignIn(true);
    }
  }, [isLoggedIn]); // Trigger effect when isLoggedIn changes

  const handleSignIn = (email) => {
    setShowSignIn(false);
    onSignIn(email); // Trigger the sign-in action (you may adjust this based on your application logic)
  };

const handleSignUp = (email) => {
  setShowSignUp(false);
  onSignUp(email); // Pass the email to onSignUp
};


  const { quoteItemsCount } = useQuote();

  return (
    <>
     <Navbar expand="lg" bg="white" variant="light" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              alt="Logo"
              height="50"
              className="d-inline-block align-top mr-3"
            />
          </Navbar.Brand>
          <Nav className="ml-auto" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          {isLoggedIn || isSignedUp ? (
              <NavDropdown title={<FaUser className="profile-icon" />} style={{ margin: '14px', fontSize:'0.8rem'}} id="collapsible-nav-dropdown">
                <NavDropdown.Item>{userEmail}</NavDropdown.Item>
                <NavDropdown.Item onClick={onSignOut}>Sign Out</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown title={<FaUser className="profile-icon" />} style={{ margin: '14px', fontSize:'0.8rem'}} id="collapsible-nav-dropdown">
                <NavDropdown.Item onClick={() => setShowSignIn(true)}>Sign In</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/signup">Sign Up</NavDropdown.Item>
              </NavDropdown>
            )}
            <Link to="/quotes" className="learn-more-button">
              Get Quotes
              {quoteItemsCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {quoteItemsCount}
                  <span className="visually-hidden">unread messages</span>
                </span>
              )}
            </Link>
          </Nav>
        </Container>
      </Navbar>


     {/* Second Navbar */}
     <div style={{ marginTop: '85px' }}>
     <Navbar bg="dark" variant="dark" expand="lg" className="second-navbar" style={{fontSize: '12.4px', margin:'inherit',zIndex: '1001'}} fixed="top">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-second-navbar" />
          <Navbar.Collapse id="responsive-second-navbar">
            <Nav className="mr-auto marquee">
              <Nav.Link as={Link} to="/wiremesh">Wiremesh</Nav.Link>
              <Nav.Link as={Link} to="/conceal_lock">Conceal Lock</Nav.Link>
              <Nav.Link as={Link} to="/wool_pipe">Wool Pipe</Nav.Link>
              <Nav.Link as={Link} to="/sliding_window_roller">Sliding Window Roller</Nav.Link>
              <Nav.Link as={Link} to="/louvers">Louver's</Nav.Link>
              <Nav.Link as={Link} to="/pvc_gasket">PVC Gasket</Nav.Link>
              <Nav.Link as={Link} to="/domal_accessories">Domal Accessories</Nav.Link>
              <Nav.Link as={Link} to="/silicone_sealant">Silicone Sealant</Nav.Link>
              <Nav.Link as={Link} to="/friction_stay">Friction Stay</Nav.Link>
              <Nav.Link as={Link} to="/floor_spring_&_door_closer">Floor Spring & Door Closer</Nav.Link>
              <Nav.Link as={Link} to="/Acrylic_Foam_Tape_&_Spacer_Tape">Acrylic Foam Tape & Spacer Tape</Nav.Link>
              <Nav.Link as={Link} to="/Fiber_Bidding">Fiber Bidding</Nav.Link>
              <Nav.Link as={Link} to="/nails">Nails</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>

      {/* Sign In Modal */}
      <Modal show={showSignIn} onHide={() => setShowSignIn(false)}>
        <Modal.Header closeButton>
          <Modal.Title  className="modal_title">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignInForm onSignIn={handleSignIn} />
        </Modal.Body>
      </Modal>

      {/* Sign Up Modal */}
      <Modal show={showSignUp} onHide={() => setShowSignUp(false)} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title  className="modal_title">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm onSignUp={handleSignUp} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomNavbar;

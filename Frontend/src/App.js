// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import About from './components/About';
import Statistics from './components/Statistics';
import AppHero from './components/hero';
import ReviewSlider from './components/ReviewSlider';
import AppWorks from './components/services';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

import SignInPage from './components/SIgnInpage';
import SignUpPage from './components/SignUpPage';
import ForgotPassword from './components/ForgotPassword';
import UserProfile from './components/UserProfile';

import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';

import MainComponent from './components/MainCompoent';



import Wiremesh from './components/Wiremesh';
import ConcealLock from './components/ConcealLock';
import WoolPipe from './components/WoolPipe';
import SlidingWindowRoller from './components/SlidingWindowRoller';
import Louvers from './components/Louvers';
import PvcGasket from './components/PvcGasket';
import DomalAccessories from './components/DomalAccessories';
import SiliconeSealant from './components/SiliconeSealant';
import Frictionstay from './components/Frictionstay';
import FloorSpringDoorCloser from './components/FloorSpringDoorCloser';
import AcrylicFoamTapeSpacerTape from './components/AcrylicFoamTapeSpacerTape';
import FiberBidding from './components/FiberBidding';
import Nails from './components/Nails';
import ProductDetails from './components/ProductDetails';
import './App.css';


import AuthComponent from './components/AuthComponent';

import { QuoteProvider } from './components/QuoteContext';
import QuotePages from './components/QuotePages';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false); //
  const [userEmail, setUserEmail] = useState('');
  
  const handleSignIn = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    localStorage.setItem('userEmail', email); 
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUserEmail('');
  }

  const handleSignUp = (email) => {
    setIsSignedUp(true);
    setUserEmail(email);
    localStorage.setItem('userEmail', email); 
  };

  return (
    <QuoteProvider>
    <Router>
      <div>
      <CustomNavbar isLoggedIn={isLoggedIn} isSignedUp={isSignedUp} userEmail={userEmail} onSignIn={handleSignIn} onSignOut={handleSignOut} onSignUp={handleSignUp} />
  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage/>} />
          <Route path="/signin" element={<SignInPage onSignIn={handleSignIn} />} />
          <Route path="/signup" element={<SignUpPage onSignUp={handleSignUp} />} />
          <Route path="/auth" element={<AuthComponentPg/>} />


          <Route path="/userinfo" element={<MainComponentpage/>} />
          <Route path="/aboutus" element={<AboutPage/>} />
          <Route path="/services" element={<AppWorks/>} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/reviews" element={<ReviewSlider/>} />

          <Route path="/wiremesh" element={<WiremeshPage />} />
          <Route path='/conceal_lock' element={<ConcealLockPage/>}/>
          <Route path='/wool_pipe' element={<WoolPipePage/>}/>
          <Route path='/sliding_window_roller' element={<SlidingWindowRollerPage/>}/>
          <Route path='/louvers' element={<LouversPage/>}/>
          <Route path='/pvc_gasket' element={<PvcGasketPage/>}/>
          <Route path='/domal_accessories' element={<DomalAccessoriesPage/>}/>
          <Route path='/silicone_sealant' element={<SiliconeSealantPage/>}/>
          <Route path='/friction_stay' element={<FrictionstayPage/>}/>
          <Route path='/floor_spring_&_door_closer' element={<FloorSpringDoorCloserPage/>}/>
          <Route path='/Acrylic_Foam_Tape_&_Spacer_Tape' element={<AcrylicFoamTapeSpacerTapePage/>}/>
          <Route path='/Fiber_Bidding' element={<FiberBiddingPage/>}/>
          <Route path='/nails' element={<NailsPage/>}/>

         <Route path='/productdetails' element={<ProductDetailsPage/>}/>
         {/* <Route exact path="/product/:productName" component={ProductDetails} /> */}

          <Route path='/terms_and_conditions' element={<TermsConditionsPage/>}/>
          <Route path='/privacy_policy' element={<PrivacyPolicyPage/>}/>


          <Route path="/quotes" element={<QuotePages />} />

        </Routes>
        <Footer />
      </div>
    </Router>
    </QuoteProvider>
  );
}

const HomePage = () => (
  <>
    <HeroImage />
    <About />
    <Statistics />
    <AppHero />
    <ReviewSlider />
    <AppWorks />
    <ContactForm />
  </>
);


const AboutPage = () => (
  <>
   
    <About />
    <Statistics />
    <AppHero />
  </>
);




const SignInFormPage = () =>(
  <>
  <SignInPage/>
  </>
  );



  const SignUpFormPage = () =>(
    <>
    <SignUpPage/>
    </>
    );


const ForgotPasswordPage = () =>(
<>
<ForgotPassword/>
</>
);


const AuthComponentPg = () => (
<>
<AuthComponent/>
</>
);

const ProductDetailsPage = () => (
<>
<ProductDetails/>
</>
);
  
const MainComponentpage =()=>(
<>
<MainComponent/>
</>
);

const WiremeshPage = () => (
  <>
    <Wiremesh />
  </>
);


const TermsConditionsPage = () => (
<>
<HeroImage />
<TermsConditions/>
</>
);


const PrivacyPolicyPage = () => (
  <>
  <HeroImage />
  <PrivacyPolicy/>
  </>
  );

const ConcealLockPage = () => (
  <>
    <ConcealLock />
  </>
);

const WoolPipePage = () => (
  <>
    <WoolPipe />
  </>
);

const SlidingWindowRollerPage = () => (
<>
<SlidingWindowRoller/>
</>
);


const LouversPage = () => (
  <>
  <Louvers/>
  </>
  );
  

  const PvcGasketPage = () => (
    <>
    <PvcGasket/>
    </>
    );


    

  const DomalAccessoriesPage = () => (
    <>
      <DomalAccessories/>
      </>
      );
  
  const SiliconeSealantPage = () => (
    <>
    <SiliconeSealant/>
    </>
  );


  const FrictionstayPage = () => (
    <>
      <Frictionstay/>
      </>
      );
    
      const FloorSpringDoorCloserPage = () => (
        <>
          <FloorSpringDoorCloser/>
          </>
          );

          const AcrylicFoamTapeSpacerTapePage = () => (
            <>
              <AcrylicFoamTapeSpacerTape/>
              </>
              );

      const FiberBiddingPage = () => (
        <>
        <FiberBidding/>
        </>
      );

      const NailsPage = () => (
        <>
        <Nails/>
        </>
      );

export default App;

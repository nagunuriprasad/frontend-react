import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Payment from './Payment';
import SignupForm from './SignupForm';
import CompanyForm from './CompanyForm';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';
import StaffSignup from './StaffSignup';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Faq from './Faq';
import NewPage from './NewPage';
import LanguageSelector from './LanguageSelector';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/SignupForm" element={<SignupForm />} />
        <Route path="/CompanyForm" element={<CompanyForm />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        
        <Route path="/StaffSignup" element={<StaffSignup />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/Faq" element={<Faq/>} />
        <Route path="/NewPage" element={<NewPage/>} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


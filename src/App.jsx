import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import CustomerPage from './pages/CustomerPage';
import EditPage from './pages/EditPage';
import ViewCart from './pages/ViewCart';
import PlaceOrder from './pages/PlaceOrder';
import GuestPage from './pages/GuestPage';
import TermsAndService from './pages/TermsAndService';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  return(
    <>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />}/>
            <Route path="/signin" element={<SignInPage />}/>
            <Route path="/admin" element={<AdminPage />}/>
            <Route path="/customer" element={<CustomerPage />} />
            <Route path="/edit/:id" element= {<EditPage />} />
            <Route path="/viewcart" element= {<ViewCart />} />
            <Route path="/placeorder" element= {<PlaceOrder />} />
            <Route path="/products" element= {<GuestPage />} />
            <Route path="/terms" element= {<TermsAndService />} />
            <Route path="/about" element= {<AboutUs />} />
            <Route path="/contact" element= {<Contact />} />
            <Route path="/privacy" element= {<PrivacyPolicy />} />
          </Routes>
      </Router>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App

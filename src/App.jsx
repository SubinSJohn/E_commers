import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import CustomerPage from './pages/CustomerPage';
import EditPage from './pages/EditPage';


function App() {
  return(
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />}/>
          <Route path="/signin" element={<SignInPage />}/>
          <Route path="/admin" element={<AdminPage />}/>
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/edit/:id" element= {<EditPage />} />
        </Routes>
    </Router>
  );
}

export default App

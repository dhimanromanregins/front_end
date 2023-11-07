import './App.css';
import Home from './Components/Home';
import Info from './Components/Info';
import Register from './Components/Register';
import SecurityLogin from './Components/SecurityLogin';
import CreatePassword from './Components/CreatePassword';
import SecureWallet from './Components/SecureWallet';
import MetaData from './Components/MetaData';
import UserPhrases from './Components/UserPhrases';
import ConfirmPhrases from './Components/ConfirmPhrases';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  let [pageUrl, setPageUrl] = useState('/register');
  const updatePageUrl = (url)=>{
    setPageUrl(url);
  }
  let [username, setUsername] = useState('');
  let [secretPhrases, setSecretPhrases] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home updatePageUrl={updatePageUrl} />} />
        <Route path="/info" element={<Info pageUrl={pageUrl} />} />
        <Route path="/register" element={<Register setSecretPhrases={setSecretPhrases} />} />
        <Route path="/security-login" element={<SecurityLogin setUsername={setUsername} />} />
        <Route path="/create-password" element={<CreatePassword username={username} />} />
        <Route path="/secure-wallet" element={<SecureWallet />} />
        <Route path="/user-phrases" element={<UserPhrases secretPhrases={secretPhrases} />} />
        <Route path="/confirm-phrases" element={<ConfirmPhrases />} />
        <Route path="/meta-data" element={<MetaData />} />
      </Routes>
    </Router>
  );
}

export default App;

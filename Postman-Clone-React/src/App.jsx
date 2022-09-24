import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import Request from './components/Workspace/Request/RequestPanel';
import Response from './components/Workspace/Response/ResponsePanel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './components/SignUp/Register';
import Otpverify from './components/Otpverify/Otpverify';

const App = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/dashboard" element={<Layout/>}/>
        
          {/* <Layout>
              <Request setResponse={setResponse} setLoading={setLoading} />
              <Response response={response} loading={loading} />
            </Layout> */}

          <Route path="/" element={<Registration />} />
          <Route path="/OtpVerify" element={<Otpverify/>}/>




        </Routes>
      </BrowserRouter>
    </>
  );
};





export default App;

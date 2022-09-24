import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import Request from './components/Workspace/Request/RequestPanel';
import Response from './components/Workspace/Response/ResponsePanel';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Layout>
              <Request setResponse={setResponse} setLoading={setLoading} />
              <Response response={response} loading={loading} />
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};





export default App;

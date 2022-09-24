import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import Request from './components/Workspace/Request/RequestPanel';
import Response from './components/Workspace/Response/ResponsePanel';
import Aside from './components/Aside/Aside';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>

      <BrowserRouter>
        <Switch>
          <Route path="/api-manager">
            <Layout>
              <Aside/>
              <div className='main-container col-md-9'>
                <br/>
                <br/>
                <br/>
                <br/>
                <Request setResponse={setResponse} setLoading={setLoading} />
                <Response response={response} loading={loading} />
              </div>
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};





export default App;

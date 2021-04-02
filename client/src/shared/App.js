import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import Test from '../components/Test';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Route path='/test' exact component={Test} />
      hello
    </ConnectedRouter>
  );
}

export default App;

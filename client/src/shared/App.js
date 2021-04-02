import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import Header from '../components/Header';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path='/' exact>
          <Header />
          <Main />
        </Route>
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
      </ConnectedRouter>
    </>
  );
}

export default App;

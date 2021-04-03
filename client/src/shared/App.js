import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import Header from '../components/Header';
import Main from '../pages/Main';
import Footer from '../components/Footer';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import OrderList from '../pages/OrderList';
import ShoppingBag from '../pages/ShoppingBag';
import TopCarousel from '../components/Carousel';
import NonUserOrderList from '../pages/NonUserOrderList';

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path='/' exact>
          <Header />
          <Main />
          <TopCarousel />
          <Footer />
        </Route>
<<<<<<< HEAD
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/shoppingbag' exact component={ShoppingBag} />
        <Route path='/orderlist' exact component={OrderList} />
        <Route path='/nonuserorderlist' exact component={NonUserOrderList} />
=======
        <Route path='/user/login' exact component={Login} />
        <Route path='/user/signup' exact component={Signup} />
>>>>>>> 8268f5ed21577dff9eba61d3b366ab28a5b2d2ef
      </ConnectedRouter>
    </>
  );
}

export default App;

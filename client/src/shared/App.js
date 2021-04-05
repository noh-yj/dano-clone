import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import OrderList from '../pages/OrderList';
import ShoppingBag from '../pages/ShoppingBag';
import NonUserOrderList from '../pages/NonUserOrderList';
import Allproducts from '../pages/Allproducts';
import DanoInfo from '../pages/DanoInfo';
import Popularproducts from '../pages/Popularproducts';
import Danoproducts from '../pages/Danoproducts';
import Newproducts from '../pages/Newproducts';
import Cheapproducts from '../pages/Cheapproducts';
import Freeproducts from '../pages/Freeproducts';
import Prepare from '../pages/Prepare';
import Mypage from '../pages/Mypage';
import Userinfo from '../pages/Userinfo';
import Cart from '../pages/Cart';

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={Main} />
        <Route path='/user/login' exact component={Login} />
        <Route path='/user/signup' exact component={Signup} />
        <Route path='/shoppingbag' exact component={ShoppingBag} />
        <Route path='/orderlist' exact component={OrderList} />
        <Route path='/nonuserorderlist' exact component={NonUserOrderList} />
        <Route path='/products/allproducts' exact component={Allproducts} />
        <Route path='/danoinfo' exact component={DanoInfo} />
        <Route
          path='/products/popularproducts'
          exact
          component={Popularproducts}
        />
        <Route path='/products/newproducts' exact component={Newproducts} />
        <Route path='/products/danoproducts' exact component={Danoproducts} />
        <Route path='/products/cheapproducts' exact component={Cheapproducts} />
        <Route path='/products/freeproducts' exact component={Freeproducts} />
        <Route path='/prepare' exact component={Prepare} />
        <Route path='/mypage' exact component={Mypage} />
        <Route path='/user/mypage' exact component={Userinfo} />
        <Route path='/cart' exact component={Cart} />
      </ConnectedRouter>
    </>
  );
}

export default App;

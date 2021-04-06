import React, { useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import { getCookie } from '../shared/Cookie';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Purchase from '../pages/Purchase';
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
import DetailProduct from '../pages/DetailProduct';

function App() {
  const dispatch = useDispatch();
  const cookie = getCookie('is_login') ? true : false;
  useEffect(() => {
    if (cookie) {
      dispatch(userActions.getUserDB());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={Main} />
        <Route path='/user/login' exact component={Login} />
        <Route path='/user/signup' exact component={Signup} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/purchase' exact component={Purchase} />
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
        <Route path='/user/mypage/:id' exact component={Userinfo} />
        <Route path='/detail/product/:id' exact component={DetailProduct} />
      </ConnectedRouter>
    </>
  );
}

export default App;

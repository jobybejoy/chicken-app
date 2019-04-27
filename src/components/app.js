import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import { connect } from 'react-redux'
import { compose } from 'redux'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../style/app.css';

import Home from '../containers/Home'
import ItemDetails from '../containers/ItemDetails'

//* Please Remove all temp after use
import NavBar from '../containers/temp/NavBar'
import SignIn from '../containers/temp/SignIn'
import AuthRoute from '../containers/temp/AuthRoute'
import GoogleSignIn from '../containers/temp/Sign/GoogleLogin'

import AppBar from '../components/Molecules/AppBar'

import Cart from '../containers/Cart'
import Location from '../containers/Location'
import Checkout from '../containers/Checkout'
import Payment from '../containers/Payment'
import Order from '../containers/Order'

class App extends Component {
  render() {

    const { cart } = this.props

    return (
      <BrowserRouter>
        <div className="App">
          {/* <NavBar ></NavBar> */}
          <AppBar home={{ page: '/' }} cart={{ count: cart.items.length, page: "/cart" }} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/item/:id" component={ItemDetails} />
            <Route path="/signin" component={SignIn} />

            <Route path="/google" component={GoogleSignIn} />

            <Route path="/cart" component={Cart} />
            <Route path="/location" component={Location} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/payment" component={Payment} />
            <Route path="/order" component={Order} />

            {/* Auth Route Works!! */}
            <AuthRoute path='/gold' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// export default App;
const MapStateToProps = (state) => {
  return {
    // items: state.firestore.ordered.items,
    cart: state.cart,
    items: state.items.items,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(MapStateToProps),
)(App)

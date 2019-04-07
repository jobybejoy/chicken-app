import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../style/app.css';

import Home from '../containers/Home'
import ItemDetails from '../containers/ItemDetails'

//* Please Remove all temp after use
import NavBar from '../containers/temp/NavBar'
import SignIn from '../containers/temp/SignIn'
import AuthRoute from '../containers/temp/AuthRoute'
import GoogleSignIn from '../containers/temp/Sign/GoogleLogin'

import Cart from '../containers/Cart'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar ></NavBar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/item/:id" component={ItemDetails} />
            <Route path="/signin" component={SignIn} />

            <Route path="/google" component={GoogleSignIn} />

            <Route path="/cart" component={Cart} />

            {/* Auth Route Works!! */}
            <AuthRoute path='/gold' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import { connect } from 'react-redux'
import { compose } from 'redux'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../style/app.css';

import Home from '../containers/Home'
import ItemDetails from '../containers/ItemDetails'
import NavBar from '../components/Molecules/NavBar'

//* Please Remove all temp after use

import SignIn from '../containers/temp/SignIn'
import AuthRoute from '../containers/Auth/Gaurds/AuthRoute'

import AppBar from '../components/Molecules/AppBar'

import Cart from '../containers/Cart'
import Location from '../containers/Location'
import Checkout from '../containers/Checkout'
import Payment from '../containers/Payment'

import Login from '../containers/Auth/Login/GoogleLogin'

// Order Routes
import MyOrders from '../containers/MyOrders'
import MyProfile from '../containers/MyProfile'
import SubmittedOrder from '../containers/SubmittedOrder'
import SubmitOrder from '../containers/SubmitOrder'

import ShowMyOrder from '../containers/ShowMyOrder'

import DeliverOrder from '../containers/DeliverOrder'

// Utils
import ScanQRCode from '../components/Organisms/QRCode/QRScanner.js'

import ShowOrder from '../containers/ShowOrder'

// Manager Pages
import ManagerHome from '../containers/Manager/Home'

// Admin Pages
import AdminDash from '../containers/Admin/Dashboard'
import AddItem from '../containers/Admin/AddItem'
import AssignRole from '../containers/Admin/AssignRole'
import AssignRoleUser from '../containers/Admin/AssignRoleUser'

import AllOrderList from '../containers/Admin/AllOrders'
import AllUserList from '../containers/Admin/AllUsers'
import UserProfile from '../containers/Admin/UserProfile'


class App extends Component {
  render() {

    const { cart } = this.props
    console.log('APP', this.props);

    return (
      <BrowserRouter>
        <div className="App">
          <div className="screen">

            {/* <NavBar ></NavBar> */}
            <AppBar home={{ page: '/' }} cart={{ count: cart.items.length, page: "/cart" }} />
            <Switch>

              {/* Remove Signin */}
              <Route path="/signin" component={SignIn} />

              {/* UnAuthed Routes */}
              <Route path="/login" component={Login} />

              {/* Protected Routes */}

              <AuthRoute exact={true} path="/" component={Home} />
              <AuthRoute path="/item/:id" component={ItemDetails} />
              <AuthRoute path="/cart" component={Cart} />

              <AuthRoute path="/location" component={Location} />
              <AuthRoute path="/add/location" component={Location} />

              <AuthRoute path="/checkout" component={Checkout} />
              <AuthRoute path="/payment" component={Payment} />

              <AuthRoute path="/my/orders" component={MyOrders} />
              <AuthRoute path="/my/profile" component={MyProfile} />

              <AuthRoute path="/my/order/:order_id" component={ShowMyOrder} />

              <AuthRoute path="/submit/order" component={SubmitOrder} />
              {/*// !check | Verify  */}
              <AuthRoute path="/submitted/order/:order_id" component={SubmittedOrder} />

              {/* //! Delivery Boy Dash Icomplete | Unaddressed */}
              <AuthRoute allowed={['admin', 'manager', 'deliveryBoy']} path="/delivery/boy/dashboard" component={ScanQRCode} />

              <AuthRoute allowed={['admin', 'manager', 'deliveryBoy']} path="/scan/qr" component={ScanQRCode} />

              <AuthRoute allowed={['admin', 'manager', 'deliveryBoy']} path="/deliver/order/:order_id/:uid" component={DeliverOrder} />

              <AuthRoute allowed={['admin', 'manager']} path="/order/:order_id" component={ShowOrder} />

              {/* Manager Routes */}
              <AuthRoute path="/manager/dashboard" allowed={['manager']} component={ManagerHome} />

              {/* Admin Routes */}
              <AuthRoute path="/add/item" allowed={['admin', 'manager']} component={AddItem} />

              {/* Order Related Routes */}
              <AuthRoute path="/admin/dashboard" allowed={['admin']} component={AdminDash} />
              <AuthRoute exact={true} path="/assign/role" allowed={['admin']} component={AssignRole} />
              <AuthRoute path="/assign/role/:uid" allowed={['admin']} component={AssignRoleUser} />

              <AuthRoute path="/all/items" allowed={['admin', 'manager']} component={ManagerHome} />
              <AuthRoute path="/all/orders" allowed={['admin', 'manager']} component={AllOrderList} />
              <AuthRoute path="/all/:role" allowed={['admin']} component={AllUserList} />


              <AuthRoute path="/user/:uid" allowed={['admin']} component={UserProfile} />

            </Switch>

            <NavBar />

          </div>
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

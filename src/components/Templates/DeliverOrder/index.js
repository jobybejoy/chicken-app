import React, { Component } from 'react'
import './style.css'
import Text from '../../Atoms/Text'

import QRCode from 'qrcode.react'


import OrderSummary from '../Checkout/CheckoutItem'
import OrderLocation from '../Checkout/LocationCard'

import moment from 'moment'

import Button from '../../Atoms/Button'

// TODO Add Location and Payment Method to Order

export class Order extends Component {

  state = {
    headerCollapsed: true
  }

  toggleHeader() {
    this.setState({
      headerCollapsed: !this.state.headerCollapsed
    });
  }

  toCal(time) {
    const momentDate = moment.unix(time).calendar(null, {
      // sameDay: '[Today]',
      // nextDay: '[Tomorrow]',
      // nextWeek: 'dddd',
      // lastDay: '[Yesterday]',
      // lastWeek: '[Last] dddd',
      sameElse: 'DD/MM/YYYY [at] hh:mm A'
    });
    return momentDate
  }

  render() {

    let host = "https://chicken-app-dev.firebaseapp.com"
    if (process.env.NODE_ENV !== 'production') {
      host = "http://localhost:8000"
    }

    console.log('this props... ', this.props);


    const { order, url_uid } = this.props
    const { items, total, delivery_type, payment, status, order_id, user } = order

    // url_uid = this.props.delivery_type

    if (order.order_id) {

      if (order.user.uid !== url_uid) {
        return "Something went wrong"
      }

      return (

        <div className="payment deliver_order container">

          {
            this.state.headerCollapsed ?
              <div className="header" onClick={() => this.toggleHeader()}>
                <img className={'user_image'} src={user.photoURL} alt="" />
                <div className={'i2'}>
                  <Text className={"user_name"} component="div" varient="h3">{user.name}</Text>
                  <Text className={"order_time"} component="div" varient="body2" >
                    {this.toCal(order.orderedAt.seconds) + " "}
                  </Text>
                </div>
                <Text className={"order_id"} component="div" varient="h4" >{'#' + order_id}</Text>
              </div>
              :
              <div className="header toggled" onClick={() => this.toggleHeader()}>
                <img className={'user_image'} src={user.photoURL} alt="" />
                <div className={'i2'}>
                  <Text className={"user_name"} component="div" varient="h3">{user.name}</Text>
                  <Text className={"order_time"} component="div" varient="body2" >
                    {this.toCal(order.orderedAt.seconds) + " "}
                  </Text>
                  <div className="user_details">
                    <Text className={"user_email"} component="div" varient="label">{user.email}</Text>
                    <Text className={"user_phoneNumber"} component="div" varient="label">{user.phoneNumber}</Text>
                  </div>

                </div>
                <Text className={"order_id"} component="div" varient="h4" >{'#' + order_id}</Text>
              </div>

          }

          <div className="contact_user">
            <a href={'tel:' + user.phoneNumber}>
              <Button varient={'OUTLINE'} className={'contact_btn'} name={'primary'}
                onClick={() => { }}>
                Call
            </Button>
            </a>
            <a href={"mailto:" + user.email}>
              <Button varient={'OUTLINE'} className={'contact_btn'} name={'primary'}
                onClick={() => { }}>
                Email
            </Button>
            </a>

            <a href={"sms:" + user.phoneNumber}>
              <Button varient={'OUTLINE'} className={'contact_btn'} name={'primary'}
                onClick={() => { }}>
                SMS
            </Button>
            </a>


          </div>

          {
            items.map((item) => {
              return (
                <OrderSummary item={item} />
              )
            })
          }
          <div className="price_container">
            <Text className={'cart_total_label'} varient={'body'} component='span'>Total</Text>
            <Text className={'cart_total'} varient={'body'} component='span'>{total + ' AED' || 0 + ' AED'}</Text>
          </div>
          {
            delivery_type &&
            <React.Fragment>
              <Text className={'category_title'} varient='h3' component='div'>Delivery</Text>
              <OrderLocation title={delivery_type.title} address={delivery_type.fullAddress} />
            </React.Fragment>
          }
          {
            payment &&
            <React.Fragment>
              <Text className={'category_title'} varient='h3' component='div'>Payment</Text>
              <OrderLocation title={payment.method === 'COD' ? "Cash on Delivery" : "Online Payment"} />
            </React.Fragment>
          }

          <Button varient={'PRIMARY'} className={'deliv_btn'} name={'primary'}
            onClick={() => { }}>
            Deliver
          </Button>

        </div >
      )
    }

    return "Fetching the Order"
  }
}

Order.defaultProps = {
  items: []
};


export default Order

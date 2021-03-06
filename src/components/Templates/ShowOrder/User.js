import React, { Component } from 'react'
import './style.css'
import Text from '../../Atoms/Text'
import Button from '../../Atoms/Button'

import QRCode from 'qrcode.react'
import moment from 'moment'

import OrderSummary from '../Checkout/CheckoutItem'
import OrderLocation from '../Checkout/LocationCard'

// TODO Add Location and Payment Method to Order

export class Order extends Component {

  state = {
    headerCollapsed: true,
    allOptions: [
      { value: 'pending', label: 'Action Pending' },
      { value: 'accepted', label: 'Accepted' },
      { value: 'scheduled', label: 'Delivery Scheduled' },
      { value: 'outForDelivery', label: 'Out For Delivery' },
    ],
  }

  toggleHeader() {
    this.setState({
      headerCollapsed: !this.state.headerCollapsed
    })
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

  getDefaultValue(currentStatus, index: null) {
    console.log(currentStatus);
    const res = this.state.allOptions.filter((option) => currentStatus === option.value)
    if (index === 'label') return res[0].label
    else return res[0]
  }

  render() {

    let host = "https://chicken-app-dev.firebaseapp.com"
    if (process.env.NODE_ENV !== 'production') {
      host = "http://localhost:8000"
    }

    const { items, total, location, payment, status, orderedAt, order_id, user } = this.props

    if (!items) return "Loading the order"

    return (
      <div className="showOrder payment container">

        <Text className={'orderId container'} varient='h3' component='div'>
          <div className={'orderId id'}>{order_id && ('# ' + order_id)}</div>
        </Text>

        <div className="header">
          <div className={'first'}>
            <Text className={'orderStatus_label'} varient='h6' component='div'>Order Status</Text>
            <Text className={'category_title'} varient='h3' component='div'>
              {/* Order {status}! {status === "placed" && "👍"} */}
              {status ? this.getDefaultValue(status, 'label') : ""}
            </Text>
            {/* <Text className={'category_title orderID'} varient='h3' component='div'>#{order_id}</Text> */}
          </div>

          {
            order_id ?
              <div className="qr container">
                <QRCode
                  value={host + "/deliver/order/" + order_id + "/" + user.uid}
                  size={100}
                  bgColor={"transparent"}
                  fgColor={"var(--text-01)"}
                  level={"L"}
                  includeMargin={false}
                  renderAs={"svg"}
                />
              </div>
              :
              <div className="qr container">
              </div>
            // <div className="banner">
            // </div>
          }
        </div>

        <Text className={'category_title'} varient='h3' component='div'>Items</Text>
        {items.map((item) => {
          return (
            <OrderSummary item={item} />
          )
        })}
        <div className="price_container">
          <Text className={'cart_total_label'} varient={'body'} component='span'>Total</Text>
          <Text className={'cart_total'} varient={'body'} component='span'>{total + ' AED' || 0 + ' AED'}</Text>
        </div>
        {location &&
          <React.Fragment>
            <Text className={'category_title'} varient='h3' component='div'>Delivery</Text>
            <OrderLocation title={location.title} address={location.fullAddress} />
          </React.Fragment>
        }
        {
          payment &&
          <React.Fragment>
            <Text className={'category_title'} varient='h3' component='div'>Payment</Text>
            <OrderLocation title={payment.method === 'COD' ? "Cash on Delivery" : "Online Payment"} />
          </React.Fragment>
        }

      </div>
    )
  }
}

Order.defaultProps = {
  items: []
};


export default Order

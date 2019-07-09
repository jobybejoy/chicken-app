import React, { Component } from 'react'
import './style.css'
import { Text } from '../../../Atoms/Text/index';
import moment from 'moment'


export class OrderItem extends Component {

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

    const { order } = this.props

    // const date = moment.unix(this.props.order.orderedAt.seconds).calender();
    // const dateRes = moment.isDate(date)
    // const dateRes = moment.isDate(date) ? moment(date).format('LLLL') : date

    console.log('order', order.orderedAt);

    // const timeInCal = this.toCal(order.orderedAt.seconds);
    // console.log('UNX', moment.unix(order.orderedAt.seconds).calendar());


    return (
      <div className="orderItem container">
        <div className="header">
          <img className={'user_image'} src={order.user.photoURL} alt="" />
          <div className={'i2'}>
            <Text className={"user_name"} component="div" varient="h3">{order.user.name}</Text>
            <Text className={"order_time"} component="div" varient="body2" >
              {this.toCal(order.orderedAt.seconds) + " "}
            </Text>
          </div>
          <Text className={"order_id"} component="div" varient="h4" >{'#' + order.order_id}</Text>
        </div>
        <div className="orderBody">
          {
            order.items.map((item, index) => {
              return (
                <React.Fragment>
                  <div className="item">
                    <div className="col">
                      <img className="itemImage" src={item.url} alt="" />
                    </div>
                    <div className="col2">
                      <Text className="itemName" varient={'h3'} component="div">{item.name}</Text>
                      {
                        item.subItems.map((subItem) => {
                          return (
                            <div className="subItem">
                              <Text className="name" varient={'body'}>{subItem.name}</Text>
                              <Text className="quantity" varient={'body'}>{'' + subItem.count}</Text>
                              <Text className="price" varient={'body'}>{subItem.subPrice + ' AED'}</Text>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </React.Fragment>
              )
            })
          }
          {
            order.total &&
            <div className="order_price_container">
              <Text className={'order_total_label'} varient={'body'} component='span'>Total</Text>
              <Text className={'order_total'} varient={'body'} component='span'>{order.total + ' AED' || 0 + ' AED'}</Text>
            </div>
          }
          <div className="order_other">
            <Text component="span" varient={'body2semibold'} className="order_delivery">
              {order.delivery_type.title === "Pickup" ? "Pickup" : "Delivery"}
            </Text>
            <Text component="span" varient={'body2semibold'} className="order_payment">{order.payment.method}</Text>
          </div>
        </div>
      </div>
    )
  }
}


export default OrderItem

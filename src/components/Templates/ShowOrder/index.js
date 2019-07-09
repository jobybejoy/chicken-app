import React, { Component } from 'react'
import './style.css'
import Text from '../../Atoms/Text'
import Button from '../../Atoms/Button'
import Select from 'react-select';

import QRCode from 'qrcode.react'
import moment from 'moment'

import OrderSummary from '../Checkout/CheckoutItem'
import OrderLocation from '../Checkout/LocationCard'

// TODO Add Location and Payment Method to Order

export class Order extends Component {

  state = {
    headerCollapsed: true,
    selectedOptions: null,
    allOptions: [
      { value: 'pending', label: 'Action Pending' },
      { value: 'accepted', label: 'Accepted' },
      { value: 'scheduled', label: 'Delivery Scheduled' },
      { value: 'outForDelivery', label: 'Out For Delivery' },
    ],
    defaultOption: {}
  }

  getOptions(currentRoles) {
    // return this.state.allOptions.filter((option) => currentRoles[option.value] === undefined)
    return this.state.allOptions
  }

  getDefaultValue(currentStatus, index: null) {
    // console.log(currentStatus);
    const res = this.state.allOptions.filter((option) => currentStatus === option.value)
    if (index === 'label') return res[0].label
    else return res[0]
  }

  handleSelect = selectedOptions => {
    this.setState({ selectedOptions });
  };

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

  render() {

    let host = "https://chicken-app-dev.firebaseapp.com"
    if (process.env.NODE_ENV !== 'production') {
      host = "http://localhost:8000"
    }

    const { items, total, location, payment,
      status, orderedAt, order_id, user, functions, success, error } = this.props
    // console.log(this.props);


    if (!items) return "Loading the order"

    return (
      <div className="showOrder payment container">

        <Text className={'orderId container'} varient='h3' component='div'>
          <div className={'orderId id'}>{order_id && ('# ' + order_id)}</div>
        </Text>

        <div className="pageHeader">
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


        {user &&
          <div>
            {
              this.state.headerCollapsed ?
                <div className="header" onClick={() => this.toggleHeader()}>
                  <img className={'user_image'} src={user.photoURL} alt="" />
                  <div className={'i2'}>
                    <Text className={"user_name"} component="div" varient="h3">{user.name}</Text>
                    <Text className={"order_time"} component="div" varient="body2" >
                      {this.toCal(orderedAt.seconds) + " "}
                    </Text>
                  </div>
                  <Text className={"order_id"} component="div" varient="h4" >
                    {/* {'#' + order_id} */}{' '}
                  </Text>
                </div>
                :
                <div className="header toggled" onClick={() => this.toggleHeader()}>
                  <img className={'user_image'} src={user.photoURL} alt="" />
                  <div className={'i2'}>
                    <Text className={"user_name"} component="div" varient="h3">{user.name}</Text>
                    <Text className={"order_time"} component="div" varient="body2" >
                      {this.toCal(orderedAt.seconds) + " "}
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

          </div>
        }
        <Text className={'category_title'} varient='h3' component='div'>Items</Text>
        {items.map((item) => {
          return (
            <OrderSummary key={item.name} item={item} />
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


        {
          status ?
            <div className="newRole container">

              <Text className={"label"} component="div" varient="h5" >Change the order status</Text>

              <Select
                defaultValue={this.state.defaultOption}
                value={this.state.selectedOptions}
                onChange={this.handleSelect}
                // placeholder="Change Order Status "
                // isMulti
                name="status"
                className="basic-multi-select"
                classNamePrefix="select"
                options={this.getOptions(status)}
              />

              {success ? <Text className={"notiF"} component="div" varient="caption" >{success}</Text> : ""}
              {error ? <Text className={"notiF redd"} component="div" varient="caption" >{error}</Text> : ""}

              <Button className="cta" varient={'PRIMARY'} name={'primary'}
                onClick={() => functions.changeOrderStatus(order_id, this.state.selectedOptions)}
              >
                Update Order Status
              </Button>
            </div>
            :
            ""
        }

      </div>
    )
  }
}

Order.defaultProps = {
  items: []
};


export default Order

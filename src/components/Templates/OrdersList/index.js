import React, { Component } from 'react'
import './style.css'
import OrderCard from '../../../components/Organisms/Order/OrderItem'
import { Link } from 'react-router-dom'

//TODO as the component is waiting for data, 
//TODO --drop loading orders around 12 to show loading 

export class OrdersList extends Component {

  render() {

    const { orders, loading } = this.props;
    const length = orders.length;

    if (length > 0) {
      return (
        <div className={"orderList container"}>
          {
            orders.map((item, key) => {
              return (
                <Link to={'/order/' + item.order_id} className={'order_item'} key={key}>
                  <OrderCard order={item} />
                </Link>
              )
            })
          }
        </div>
      )
    } else {
      return (
        <div className={"home container"}>
          {/* <MiniCard loading={true} />
          <MiniCard loading={true} />
          <MiniCard loading={true} />
          <MiniCard loading={true} />
          <MiniCard loading={true} />
          <MiniCard loading={true} />
          <MiniCard loading={true} />
          <MiniCard loading={true} /> */}
        </div>
      )
    }

  }
}

OrdersList.defaultProps = {
  orders: [],
  loading: false
}

export default OrdersList

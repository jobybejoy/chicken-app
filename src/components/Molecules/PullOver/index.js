import React, { Component } from 'react'
import Text from '../../Atoms/Text'
import Button from '../../Atoms/Button'
import './style.css'
import CartIcon from '@material-ui/icons/ShoppingCartOutlined'
import PayIcon from '@material-ui/icons/PaymentOutlined'
import { Redirect } from 'react-router-dom'

// TODO May have to change the main content, or make varients if needed.

export class PullOver extends Component {

  goTo(url) {

  }

  render() {
    console.log(this.props);

    const { label, price, cta_label, cta_to } = this.props

    return (
      <div className="pullContainer">
        <div className='pullOver container'>
          <div className="content">
            <Text className="total_label" component="div" varient={'body1'}>{label}</Text>
            <Text className="total_value" component="div" varient={'body1'}>{price}</Text>
          </div>
          <div className="cta_btn"
            onClick={() => {
              if (this.props.btnclick) {
                this.props.btnclick()
              }

              this.props.history.push(cta_to);
            }}>
            {/* {cta_label} */}

            <React.Fragment>
              {
                (cta_label === "CART") || (cta_label === "CHECKOUT") ?
                  <CartIcon />
                  :
                  <PayIcon />
              }
              <Text className="cta_txt" varient={'body1'}>{cta_label}</Text>
            </React.Fragment>

          </div>
        </div>
      </div >

    )
  }
}

PullOver.defaultProps = {
  label: 'TOTAL',
  price: '0 AED',
  cta_label: 'CHECKOUT',
  cta_to: '/'
};

export default PullOver

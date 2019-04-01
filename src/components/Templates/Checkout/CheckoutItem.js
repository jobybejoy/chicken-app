import React, { Component } from 'react'
import './style.css'
import ItemImage from '../../../assets/images/87634548-white-goose-anser-anser-domesticus-isolated-on-a-white-background.jpg'
import Text from '../../Atoms/Text'

export class CheckoutItem extends Component {

  render() {

    const { item } = this.props;

    return (
      <div className={'checkoutItem container'}>
        <div className="col">
          <img className="itemImage" src={ItemImage} alt="" />
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
          {
            item.subTotal &&
            <div className="subTotal">
              {/* <Text className="subPrice" varient={'body'}>SubTotal</Text> */}
              <Text className="subPrice" varient={'body'}>{item.subTotal} AED</Text>
            </div>
          }

        </div>
      </div>
    )
  }
}

CheckoutItem.defaultProps = {
  item: {
    name: "Chicken",
    url: "Comming Soon",
    subItems: [
      { name: "Meat", count: 2, price: 20, subPrice: 40 },
      { name: "Egg", count: 10, price: 1, subPrice: 10 }
    ],
    subTotal: 50
  },
};

export default CheckoutItem

import React, { Component } from 'react'
import './style.css'
import Text from '../../Atoms/Text'
import ItemImage from '../../../assets/images/87634548-white-goose-anser-anser-domesticus-isolated-on-a-white-background.jpg'
import Counter from '../../Molecules/Counter'

export class CartItem extends Component {

  getSubPrice(count, price) {
    return count * price;
  }

  render() {

    const { item, loading } = this.props;
    const { name } = item

    return (
      <div className={"cart_item"}>
        <div className="item_header">
          <img src={ItemImage} className={'item_image'} alt="" />
          <Text className={'item_name'} varient={'h3'} component={'div'}>{item.name}</Text>
        </div>
        {
          item.subItems.map((subItem, index) => {
            return (

              <div className="sub_item" key={index}>
                <div className="sub_item_header">
                  <Text className={'name'} varient={'h4'} component={'div'}>{subItem.name}</Text>
                  <Text className={'price'} varient={'h5'} component={'div'}>{subItem.subPrice + " AED"}</Text>
                </div>
                <div className="sub_item_body">
                  <Counter maxCountValue={subItem.availableCount} value={subItem.count} name={subItem.name}
                    onRightBtnClick={null}
                    onLeftBtnClick={null}
                  />
                </div>
              </div>
            );
          })
        }
      </div>
    )
  }
}

CartItem.defaultProps = {

  loading: false,
}

export default CartItem

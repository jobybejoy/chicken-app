import React, { Component } from 'react'
import './style.css'

import Text from '../../Atoms/Text'
import Button from '../../Atoms/Button'

import AddIcon from '@material-ui/icons/Add'

import Input from './Input'

export class AddItem extends Component {

  state = {
    name: "",
    image: "",
    subItems: [
      {
        name: "",
        price: null,
        availableCount: null
      }
    ],
    tempImg: null
  }



  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubItemChange(event, s_index) {
    const newItems = [...this.state.subItems];

    if (event.target.name === "price" || event.target.name === "availableCount") {
      newItems[s_index][event.target.name] = Number(event.target.value)
    } else {
      newItems[s_index][event.target.name] = event.target.value
    }

    this.setState({ subItems: newItems });

  }

  fileChangedHandler = (event) => {
    if (event.target.files[0]) {
      this.setState({
        image: event.target.files[0],
        tempImg: URL.createObjectURL(event.target.files[0])
      })
    }

  }

  resetItemImage() {
    this.setState({
      image: "",
      tempImg: null
    })
  }


  addSubItem() {
    this.setState({
      subItems: [
        ...this.state.subItems,
        {
          name: "",
          price: null,
          availableCount: null
        }
      ]
    })
  }

  render() {
    return (
      <div className="addItem container">

        <div className="itemHeader">
          <div className="itemImage" tabindex="0">
            <Input varient={'IMAGE'} name="image" image={this.state.tempImg} className="itemImage"
              onChange={(e) => this.fileChangedHandler(e)} resetImage={() => { this.resetItemImage() }} />
            {/* <img className='itemImage' src={this.state.image} alt="" srcset="" /> */}
          </div>
          <Input varient={'NAME'} name="name" className="itemName" onChange={(e) => this.handleChange(e)} value={this.state.name} />
        </div>

        {
          this.state.subItems.map((subItem, index) => {
            return (
              <div className={"subItem"}>
                <div className="header">
                  <div className={'item left'}>
                    <Input varient={'SUBNAME'} name="name" className="name" onChange={(e) => this.handleSubItemChange(e, index)} value={this.state.subItems[index].name} />
                    <Input varient={'PRICE'} name="price" className="price" onChange={(e) => this.handleSubItemChange(e, index)} value={this.state.subItems[index].price} />
                  </div>
                  <div className={'item right'}>
                    <Input varient={'COUNT'} name="availableCount" className="available Count" onChange={(e) => this.handleSubItemChange(e, index)} value={this.state.subItems[index].availableCount} />
                    <Text varient={'body2semibold'} component={'div'} className={'available Label'}>AVAILABLE</Text>
                  </div>
                </div>
                <div className={'body'}>
                  <Button className={"leftBtn"} varient={'FAB'} disabled={true} onClick={() => {
                    console.log('Button Disabled');
                  }}>
                    <AddIcon />
                  </Button>
                </div>
              </div>
            )
          })
        }

        <div tabindex="0" className={"addSubItem"} onClick={() => { this.addSubItem() }}>
          <AddIcon className={'addIcon'} /> <Text className={'addText'} varient="body2semibold">Add SubItem</Text>
        </div>
        <div className="cta_container">
          <Button className="cta_btn" varient={'PRIMARY'} name={'primary'}
            onClick={() => {
              // this.props.history.push('/checkout')
              // ! validate the input
              this.props.functions.addItem(this.state)
              this.props.history.push('/')
            }}>
            Add Item
          </Button>
        </div>
      </div>

    )
  }
}

export default AddItem

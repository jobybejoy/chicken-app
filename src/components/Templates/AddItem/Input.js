import React, { Component } from 'react'
import './style.css'
import Text from '../../Atoms/Text'
import CloseIcon from '@material-ui/icons/Close'

export class Input extends Component {
  render() {

    const { name, value, className, varient, image } = this.props

    if (varient === "NAME") {
      return (
        <input
          type="text"
          className={"custom-input name " + className}
          autoComplete={"false"}
          placeholder="Item Name"
          name={name} id={name}
          onChange={this.props.onChange}
          required="true"
          value={value} />
      )
    }

    if (varient === "SUBNAME") {
      return (
        <input
          type="text"
          className={"custom-input sub_name " + className}
          autoComplete={"false"}
          placeholder="Name"
          name={name} id={name}
          onChange={this.props.onChange}
          required="true"
          value={value} />
      )
    }

    if (varient === "PRICE") {
      return (
        <div className={'price_block'}>
          <input
            type="number"
            className={"custom-input sub_price " + className}
            autoComplete={"false"}
            placeholder="Price"
            pattern="[0-9]+"
            name={name} id={name}
            min={1}
            onChange={this.props.onChange}
            required="true"
            value={value} />
          <Text varient={'body2semibold'} component={'div'} className={'price label'}>AED</Text>
        </div>
      )
    }

    if (varient === "COUNT") {
      return (
        <input
          type="number"
          className={"custom-input item_count " + className}
          autoComplete={"false"}
          pattern="[0—9]"
          placeholder="00"
          name={name} id={name}
          min={1}
          onChange={this.props.onChange}
          required="true"
          value={value} />
      )
    }

    if (varient === "IMAGE") {
      return (
        <React.Fragment>
          <label className={"custom-input item_image_label "} for={name}>
            Choose a file
            </label>
          <input
            type="file"
            className={"custom-input item_image_input "}
            autoComplete={"false"}
            name={name} id={name}
            onChange={this.props.onChange}
            required="true"
            value={value} />
          {
            image ?
              <img className='custom-input item_image' src={image} alt="" srcset="" /> : ""
          }
          {
            image ?
              <div className='custom-input item_image_cancel_btn' onClick={this.props.resetImage}>
                <CloseIcon />
              </div>
              : ""
          }
        </React.Fragment>
      )
    }

    return (

      <input
        type="text"
        className={"custom-input " + className}
        autoComplete={"false"}
        name={name} id={name}
        onChange={this.props.onChange}
        value={value} />
    )

  }
}

export default Input

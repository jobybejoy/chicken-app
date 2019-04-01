import React, { PureComponent } from 'react'
import './style.css'
import Text from '../../Atoms/Text'

export class RadioPicker extends PureComponent {

  state = {
    selected: 'Pickup',
  }

  render() {

    const { options } = this.props;

    return (
      <div className="picker container">
        {options.map((option) => {
          return (
            <div
              key={option.title}
              className={"option " + (option.title === this.state.selected ? "selected" : "")}
              onClick={() => {
                this.setState({
                  selected: option.title
                })
              }}
            >
              <Text className="option_title" varient="h6">{option.title}</Text>
              {option.address &&
                <Text className="address" varient="body2semibold" component="div">{option.address}</Text>
              }
            </div>
          )
        })}
      </div >
    )
  }
}

export default RadioPicker

import React, { PureComponent } from 'react'
import './style.css'
import Text from '../../Atoms/Text'
import { select } from '@storybook/addon-knobs';

export class RadioPicker extends PureComponent {

  state = {
    selected: {
      title: 'Pickup',
    }
  }

  componentDidMount() {
    if (this.props.selected) {
      this.setState({ selected: this.props.selected })
    }
  }

  render() {

    const { options, onSelection, selected } = this.props;



    return (
      <div className="picker container">
        {options.map((option) => {
          console.log('Op', option.title);
          console.log('State', this.state.selected);
          return (
            <div
              key={option.title}
              className={"option " + (option.title === this.state.selected.title ? "selected" : "")}
              onClick={() => {
                this.setState({
                  selected: option
                })
                onSelection(option)
              }}
            >
              <Text className="option_title" varient="h6">{option.title}</Text>
              {option.fullAddress &&
                <Text className="address" varient="body2semibold" component="div">{option.fullAddress}</Text>
              }
            </div>
          )
        })}
      </div >
    )
  }
}

export default RadioPicker

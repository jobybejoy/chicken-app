import React, { Component } from 'react'
import Chip from '../../Atoms/Chip'
import './style.css'

export class ChipGroup extends Component {

  // DONE : On click Select the element/ CSS and JS selected value to parent
  // TODO : Horizontal Scroll
  // TODO : Work Chip along with this counter!!
  // Try React Fragment without div as container.

  state = {
    selected: null
  }

  componentWillReceiveProps(props) {
    const { value } = this.props
    if (value) {
      this.setState({
        selected: value
      })
    }
  }

  render() {
    const { options, maxCountValue, className, hide } = this.props;

    if (hide) {
      return (
        <div className={'chipgroup hidden ' + className}>
        </div>
      )
    }

    if (this.props.value > 0) {
      return (
        <div className="view_zone">
          <div className={'chipgroup ' + className}>
            {
              options.map((d, index) => {
                return (
                  <Chip key={index} text={d}
                    varient={this.props.value == d ? "SELECTED" : "DEFAULT"}
                    disabled={maxCountValue < d ? true : false}
                    onClick={() => {
                      this.setState({
                        selected: d
                      })
                      this.props.onChipSelected(d)
                    }}
                  />
                )
              })
            }
          </div>
        </div>
      )
    }

    return (
      <div className={'chipgroup ' + className}>
        {
          options.map((d, index) => {
            return (
              <Chip key={index} text={d}
                varient={this.state.selected == d ? "SELECTED" : "DEFAULT"}
                disabled={maxCountValue < d ? true : false}
                onClick={() => {
                  this.setState({
                    selected: d
                  })
                  this.props.onChipSelected(d)
                }}
              />
            )
          })
        }
      </div>
    )
  }
}

ChipGroup.defaultProps = {
  options: [10, 20, 30, 40, 50],
  onClick: () => { },
  maxCountValue: 1000,
  hide: false,
  disabled: false,
}

export default ChipGroup

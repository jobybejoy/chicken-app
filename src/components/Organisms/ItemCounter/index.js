import React, { Component } from 'react'
import './style.css'
import ChipGroup from '../../Molecules/ChipGroup'
import Counter from '../../Molecules/Counter'


export class ItemCounter extends Component {

  state = {
    count: 0,
    maxCountValue: 10000,
  }

  constructor(props) {
    super(props)

    this.updateCount = this.updateCount.bind(this)
  }

  componentDidMount() {
    if (this.props.maxCountValue) {
      this.setState({
        maxCountValue: this.props.maxCountValue
      })
    }
  }

  updateCount(value) {
    // alert('FIRED ' + value)
    this.setState({
      count: value
    });
  }

  render() {
    const { name, text, withChip } = this.props
    const { maxCountValue } = this.state
    return (
      <React.Fragment>
        <ChipGroup options={[15, 30, 45, 60, 75, 90, 105]} value={this.state.count} hide={this.state.count <= 0 || !withChip} maxCountValue={maxCountValue}
          onChipSelected={this.updateCount} />
        <Counter value={this.state.count} name={name} maxCountValue={maxCountValue} parentUpdate={this.updateCount} />
      </React.Fragment>
    )
  }
}

ItemCounter.defaultProps = {
  onClick: () => { },
  withChip: true,
  name: 'Chicken'
}

export default ItemCounter

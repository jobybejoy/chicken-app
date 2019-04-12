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
    const { name, text, withChip, count, functions, item, subItem } = this.props
    const { maxCountValue } = this.state
    return (
      <React.Fragment>
        <ChipGroup options={[15, 30, 45, 60, 75, 90, 105]} value={count} hide={count <= 0 || !withChip} maxCountValue={maxCountValue}
          onChipSelected={(value) => { functions.setItemValue({ name: item.name, subItem: subItem.name }, value) }} />
        <Counter value={count} name={name} maxCountValue={maxCountValue}
          onFirstAddClick={() => { functions.addItem({ ...this.props.item, subItem: { name: subItem.name } }) }}
          onLastRemoveClick={() => { functions.removeItem({ name: this.props.item.name, subItem: { name: subItem.name } }) }}
          onRightBtnClick={() => { functions.addCount({ name: item.name, subItem: subItem.name }) }}
          onLeftBtnClick={() => { functions.subCount({ name: item.name, subItem: subItem.name }) }}
          parentUpdate={this.updateCount} />
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

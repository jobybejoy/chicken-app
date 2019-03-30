import React, { Component } from 'react'
import Text from '../../Atoms/Text'
import Button from '../../Atoms/Button'

import AddIcon from '@material-ui/icons/Add'
import SubIcon from '@material-ui/icons/Remove'

import './style.css'

export class Counter extends Component {

  state = {
    count: 0
  };

  componentDidMount() {
    if (this.props.value > 0) {
      if (this.props.value < this.props.maxCountValue) {
        this.setState({
          count: this.props.value
        })
      } else {
        console.log('The Count Value > the available value');
      }

    }
  }

  decrementByOne() {
    if (this.state.count == 0) { return false }
    this.setState((prevState, { count }) => ({
      count: prevState.count - 1
    }));
  }

  incrementByOne() {
    if (this.props.maxCountValue === this.state.count) { return false }
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1
    }));
  }

  addButton() {
    return (
      <Button className={"rightBtn"} varient={'FAB'} onClick={() => { this.incrementByOne(); this.props.onRightBtnClick() }}>
        <AddIcon />
      </Button>
    );
  }

  subButton() {
    return (
      <Button className={"leftBtn"} varient={'FAB'} onClick={() => { this.decrementByOne() }}>
        <SubIcon />
      </Button>
    );
  }

  // TODO : Work Chip along with this counter!!
  // TODO : Check whether chip syncs with counter



  render() {

    if (this.state.count == 0) {
      return (
        <div className={"counter"}>
          {this.addButton()}
        </div>
      )
    }

    return (
      <div className={"counter container"}>

        {this.addButton()}

        <Text className={'itemCount'} varient={'caption'}>
          Chicken {this.state.count}
        </Text>

        {this.subButton()}

      </div>
    )
  }
}

Counter.defaultProps = {
  minCountValue: 0,
  value: 0,
  maxCountValue: null,
}

export default Counter

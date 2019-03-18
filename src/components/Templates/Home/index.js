import React, { Component } from 'react'
import './style.css'
import MiniCard from '../../../components/Organisms/Card/MiniCard'

export class Home extends Component {


  render() {

    const { items } = this.props;
    const length = items.length;

    return (
      <div className={"home container"}>
        {
          items.map((item, key) => {
            return (
              <MiniCard loading />
            )
          })
        }

      </div>
    )
  }
}

Home.defaultProps = {
  items: [
    { name: "Chicken" },
    { name: "Duck" },
    { name: "Roast" },
    { name: "Something" },
    { name: "Chicken" },
    { name: "Duck" },
    { name: "Roast" },
    { name: "Something" },
    { name: "Chicken" },
    { name: "Duck" },
    { name: "Roast" },
    { name: "Something" },
    { name: "Chicken" },
  ]
}

export default Home

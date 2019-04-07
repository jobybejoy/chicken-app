import React, { Component } from 'react'
import './style.css'
import MiniCard from '../../../components/Organisms/Card/MiniCard'
import { Link } from 'react-router-dom'

//TODO as the component is waiting for data, 
//TODO --drop loading items around 12 to show loading 

export class Home extends Component {

  render() {

    const { items, loading } = this.props;
    const length = items.length;

    if (length > 0) {
      return (
        <div className={"home container"}>
          {
            items.map((item, key) => {
              return (
                <Link to={'/item/' + item.id} key={key}>
                  <MiniCard name={item.name} image={loading ? 'null' : item.url} loading={loading} />
                </Link>
              )
            })
          }
        </div>
      )
    } else {
      return (
        <div className={"home container"}>
          <MiniCard loading={true} />
          <MiniCard loading={true} />
          <MiniCard loading={true} />
          <MiniCard loading={true} />
          <MiniCard loading={true} />
          <MiniCard loading={true} />
          <MiniCard loading={true} />
          <MiniCard loading={true} />
        </div>
      )
    }

  }
}

Home.defaultProps = {
  items: [],
  loading: false
}

export default Home

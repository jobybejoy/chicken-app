
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SuggestionItem from './SuggestionItem'
import {
  connectHits, Highlight
} from 'react-instantsearch-dom';


export class Hits extends Component {

  render() {
    const { hits } = this.props
    return (
      < div className={'hits'} >
        {
          hits.map(hit => (
            <Link to={'/assign/role/' + hit.objectID} tabIndex="0">
              <SuggestionItem key={hit.objectID} suggestion={hit.email} />
            </Link>
          ))
        }
      </div >
    )
  }
}

const CustomHits = connectHits(Hits);

export default CustomHits
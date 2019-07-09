import React, { Component } from 'react'
import './style.css'

import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  connectAutoComplete,
  Configure,
} from 'react-instantsearch-dom';

import CustomHits from './Custom-Hits'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'


import Text from '../../Atoms/Text'
import Input from './Custom-Input'

const searchClient = algoliasearch('JYIK65AIAW', 'bb8a3c8eab4d55d1ef3ee707280c48ae');

export class AssignRole extends Component {

  state = {
    showSuggestions: false,
  }

  searchChanged(e) {
    if (e.target.value) {
      if (this.state.showSuggestions === false) {
        setTimeout(function () {
          this.setState({ showSuggestions: true })
        }.bind(this), 200)
      }

    } else {
      if (this.state.showSuggestions === true) {
        this.setState({ showSuggestions: false })
      }

    }
  }

  resetSearach(e) {
    this.setState({ showSuggestions: false })
  }

  render() {

    const { user } = this.state;

    return (
      <div className="assignRole container">
        <Text className={'pageTitle'} varient='h3' component='div'>Manage Roles</Text>
        <div>
          <InstantSearch autofocus searchClient={searchClient}
            indexName="email_search">
            <Configure
              hitsPerPage={5}
              analytics={false}
            />
            <SearchBox
              submit={<SearchIcon />} reset={<CloseIcon />}
              translations={{
                placeholder: 'Search user\'s email',
              }}
              autoFocus
              onChange={(e) => { this.searchChanged(e) }}
              onReset={(e) => { this.resetSearach(e) }}
            />
            {this.state.showSuggestions &&
              <CustomHits />
            }
          </InstantSearch>
        </div>
      </div>
    )
  }
}

export default AssignRole

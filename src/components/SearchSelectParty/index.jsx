import React, { Component } from 'react';
import AddParty from './AddParty';
import SearchParties from './SearchParties';
import './search-select.scss';

class SearchSelectParty extends Component {
    // constructor(props) {
    //     super(props);
    // }

    onClickAddParty = () => {
        console.log('test');
    }

    render() {
        return (
            <div className="search-select-wrapper">
                <AddParty onClickAddParty={this.onClickAddParty} />
                <SearchParties />
            </div>
        )
    }
}

export default SearchSelectParty;
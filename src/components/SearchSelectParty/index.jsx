import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearAddedParty, getCurrentBalance } from '../../redux/actions/search-parties-action';
import AddParty from './AddParty';
import SearchParties from './SearchParties';
import ShowParty from './ShowParty';
import './search-select.scss';

class SearchSelectParty extends Component {
    // constructor(props) {
    //     super(props);
    // }

    onClickAddParty = () => {
        console.log('test');
    }

    onSelectParty = () => {

    }

    onCancelParty = () => {
        this.props.clearAddedParty();
    }


    onSelectingResult = (id) => {
        console.log('id', id);
        this.props.getCurrentBalance(id);
    }

    render() {
        const {
            searchedPartiesList,
            currentBalance = null
        } = this.props;
        return (
            <div className="search-select-wrapper">
                <AddParty onClickAddParty={this.onClickAddParty} />
                <SearchParties onSelectingResult={this.onSelectingResult} />
                {
                    currentBalance && searchedPartiesList.length > 0 &&
                    <ShowParty
                        currentBalance={currentBalance}
                        searchedPartiesList={searchedPartiesList}
                        onCancelParty={this.onCancelParty}
                    />
                }
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {
        partiesList: {
            searchedPartiesList,
            currentBalance
        }
    } = reduxState;

    return {
        searchedPartiesList,
        currentBalance
    };
}

export default connect(mapStateToProps, {
    clearAddedParty,
    getCurrentBalance
})(SearchSelectParty);
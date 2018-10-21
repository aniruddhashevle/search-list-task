import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearAddedPartyWithList, getCurrentBalance } from '../../redux/actions/search-parties-action';
import AddParty from './AddParty';
import SearchParties from './SearchParties';
import ShowParty from './ShowParty';
import './search-select.scss';

class SearchSelectParty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldShowSearch: false,
            shouldShowParty: false,
        };
    }

    onClickAddParty = () => {
        this.setState({ shouldShowSearch: true });
    }

    onCancelParty = () => {
        this.props.clearAddedPartyWithList();
        this.setState({
            shouldShowSearch: false,
            shouldShowParty: false
        });
    }

    onSelectingResult = (id) => {
        this.props.getCurrentBalance(id);
        this.setState({
            shouldShowSearch: false,
            shouldShowParty: true
        });
    }

    render() {
        const {
            shouldShowSearch,
            shouldShowParty
        } = this.state,
            {
                searchedPartiesList,
                currentBalance = null
            } = this.props;
        return (
            <div className="search-select-wrapper">
                {
                    !shouldShowSearch ?
                        !shouldShowParty && <AddParty onClickAddParty={this.onClickAddParty} />
                        :
                        !shouldShowParty &&
                        <SearchParties searchedPartiesList={searchedPartiesList} onSelectingResult={this.onSelectingResult} />
                }
                {
                    currentBalance && shouldShowParty &&
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
    clearAddedPartyWithList,
    getCurrentBalance
})(SearchSelectParty);
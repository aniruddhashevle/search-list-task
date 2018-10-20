import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPartiesList } from '../../../redux/actions/search-parties-action';
import SearchedList from './SearchedList';
import DEFAULT_AVATAR from '../../assets/images/default_avatar.svg';

class SearchParties extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partyName: ''
        }
    }

    onInputSearch = (e) => {
        const { value } = e.target;
        this.props.getPartiesList(value);
        this.setState({ partyName: value })
    }

    onSelectingResult = () => {
        console.log('s');
    }

    render() {
        const {
            partyName
        } = this.state,
            {
                searchedPartiesList
            } = this.props;
        return (
            <div className="seach-parties-wrapper">
                <img src={DEFAULT_AVATAR} className="avatar-image select-avatar" alt="default avatar" />
                <div className="input-wrapper">
                    <label htmlFor="praty-name" className={`${partyName ? 'party-name-label' : 'party-name-label-default'}`}>
                        Enter Party Name
                    </label>
                    <input
                        id="praty-name"
                        className="party-name-input"
                        name="party-name"
                        onChange={this.onInputSearch}
                        value={partyName}
                    />
                    <SearchedList partiesList={searchedPartiesList} onSelectingResult={this.onSelectingResult} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {
        partiesList: {
            searchedPartiesList
        }
    } = reduxState;

    return { searchedPartiesList };
}

export default connect(mapStateToProps, { getPartiesList })(SearchParties);
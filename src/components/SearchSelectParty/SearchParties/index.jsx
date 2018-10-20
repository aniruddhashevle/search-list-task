import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPartiesList } from '../../../redux/actions/search-parties-action';
import DEFAULT_AVATAR from '../../assets/images/default_avatar.svg';

class SearchParties extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partyName: ''
        }
    }

    onInputSearch = (e) => {
        this.props.getPartiesList();
        this.setState({ partyName: e.target.value })
    }

    render() {
        const {
            partyName
        } = this.state;
        return (
            <div className="seach-parties-wrapper">
                <img src={DEFAULT_AVATAR} className="avatar-image" alt="default avatar" />
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
                </div>
            </div>
        )
    }
}

export default connect(null, { getPartiesList })(SearchParties);
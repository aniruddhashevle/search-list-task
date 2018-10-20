import React, { Component } from 'react';
import DEFAULT_AVATAR from '../../assets/images/default_avatar.svg';

class SearchParties extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partyName: ''
        }
    }

    render() {
        const {
            partyName
        } = this.state;
        return (
            <div className="seach-parties-wrapper">
                <img src={DEFAULT_AVATAR} className="avatar-image" alt="default avatar" />
                <div className="input-wrapper">
                    <label for="praty-name" className={`${partyName ? 'party-name-label' : 'party-name-label-default'}`}>
                        Enter Party Name
                    </label>
                    <input
                        id="praty-name"
                        className="party-name-input"
                        name="party-name"
                        onChange={e => this.setState({ partyName: e.target.value })}
                        value={partyName}
                    />
                </div>
            </div>
        )
    }
}

export default SearchParties;
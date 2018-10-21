import React from 'react';
import DEFAULT_AVATAR from '../../assets/images/default_avatar.svg';

const ShowParty = ({ onCancelParty, currentBalance: { id, balance }, searchedPartiesList }) => {
    let partyData = searchedPartiesList.find(x => x.id === id);
    return (
        <div className="add-party-wrapper" >
            <img src={DEFAULT_AVATAR} className="avatar-image add-party-avatar" alt="default highlighted avatar" />
            <div className="party-info">
                <h2 className="party-title">
                    {partyData.name || ''}
                </h2>
                <p className="party-data">
                    {partyData.address || ''}
                </p>
                <span className="current-balance">
                    {`Current Balance Rs. ${balance}`}
                </span>
            </div>
            <div className="cancel-wrapper" onClick={onCancelParty}>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default ShowParty;
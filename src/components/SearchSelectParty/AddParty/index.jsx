import React from 'react';
import DEFAULT_AVATAR_HIGHLIGHTED from '../../assets/images/default_avatar_highlighted.svg';

const AddParty = ({ onClickAddParty }) =>
    <div className="add-party-wrapper">
        <img src={DEFAULT_AVATAR_HIGHLIGHTED} className="avatar-image" alt="default highlighted avatar" />
        <span className="add-party-text" onClick={onClickAddParty}>+ add Party</span>
    </div>

export default AddParty;
import React from 'react';

const SearchedList = ({ partiesList, onSelectingResult }) =>
    <div className="searched-list-wrapper">
        {
            partiesList.map(({
                id,
                name,
                address,
                aliasName
            }) =>
                <div key={id} id={id} className="search-list-row" onClick={_ => onSelectingResult(id)}>
                    <div className="title">
                        <span className="name">{name}</span>
                        <span className="alias-name">({aliasName})</span>
                    </div>
                    <p className="address">{address}</p>
                </div>
            )
        }
    </div>

export default SearchedList;
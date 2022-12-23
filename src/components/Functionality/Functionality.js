import React from 'react';
import './Functionality.css';

const Functionality = () => {
  return (
    <div className="functionality">
        <div className="function__left">
            <div className="filter">Filter</div>
            <div className="sort">Sort</div>

        </div>
        <div className="function__right">
            <div className="search">Search</div>
            <div className="new-challenge">
                <p>Create New Challenge</p>
            </div>
        </div>

    </div>
  )
}

export default Functionality
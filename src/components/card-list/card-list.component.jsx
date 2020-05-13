import React from 'react';

import './card-list.styles.css';

// This is a "Functional Component"
export const CardList = (props) => {
    // console.log(props);
    return <div className = 'card-list'>{props.children}</div>}
import React from 'react';
import './Selection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVoteYea } from '@fortawesome/free-solid-svg-icons';

const Selection = (props) => {
    const {name, salary, image} = props.player
    return (
        <div className = "individual-player">
            <h3>Name: {name}</h3>
            <img src={image} alt=""/>
            <p>Salary: {salary}</p>
            <button onClick = {()=> props.handlePlayer(props.player)}><FontAwesomeIcon icon={faVoteYea} /> Select Player</button>
        </div>
    );
};

export default Selection;
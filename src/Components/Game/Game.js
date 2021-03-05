import React from 'react';

const Game = (props) => {
    const playingEleven = props.playingEleven;
    const totalSpending = playingEleven.reduce((total,eleven) => total+eleven.salary,0)
    return (
        <div>
            <h5>Players selected for the Game: {playingEleven.length}</h5>
            <p>Players Selected: {
                    playingEleven.map(player => <span>{player.name}, </span>)
                }
            </p>
            <p>Total Spending: £{totalSpending}</p>
        </div>
    );
};

export default Game;
import React, { useEffect, useState } from 'react';
import data from '../../Data/data.json';
import Game from '../Game/Game';
import Selection from '../Selection/Selection';
import './Squad.css';

const Squad = () => {
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        setPlayers(data);
    },[]);
    const [playingEleven, setPlayingEleven] = useState([]);
    const handlePlayer = (player) => {
        const newlyAdded = [...playingEleven, player];
        setPlayingEleven(newlyAdded);
    }
    return (
        <div>
            <h3>Total player: {players.length}</h3>
            <div className = "squad-container">
                <div className="players-container">
                    {
                        players.map(player => <Selection player = {player} key ={player.id} handlePlayer = {handlePlayer}>
                            </Selection>)
                    }
                </div>
                <div className="selection-container">
                    <Game playingEleven = {playingEleven}></Game>
                </div>
            </div>
        </div>
    );
};

export default Squad;
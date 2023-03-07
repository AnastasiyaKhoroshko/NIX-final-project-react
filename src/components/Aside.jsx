import React from 'react';
import '../App.css';


const Aside = ({ gameResalt }) => {

    return (
        <div className="coinPage_lastAttempt">
            <h3>Минулі спроби</h3>
            {gameResalt.map((el, index) => (
                <p key={index}>{el.number || el.door || el.coin}</p>
            ))}
        </div>
    );
}

export default Aside;

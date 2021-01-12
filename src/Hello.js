
import './style.css';
import React, { useState } from 'react';

const Hello = (props) => {
    const [stateCount, setStateCount] = useState(0);
    const countTime = function () {
        setStateCount(stateCount + 1);
    };
    console.log("render");
    const { name, age, number } = props;
    return (
        <div className="App">
            <h2>
                Hello
                {name},
                I'm
                {age},
                I'm class FE
                {number}.
                <br></br>
                {stateCount}
                <button onClick={countTime}>Click</button>
            </h2>
        </div>
    );
}

export default Hello;

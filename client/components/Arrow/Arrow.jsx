import React from 'react';
import Style from './Arrow.css'

const Arrow = ({ char, onclick }) => {
    //TODO: Alter className from props and apply to css file
    // Props to pass down - direction, click function, code for left/right
    return (
        <div className={Style.arrow} onClick={onclick}>
            <div>{char}</div>
        </div>
    )
}

export default Arrow;
import React from 'react';

const Arrow = (props) => {
    //TODO: Alter className from props and apply to css file
    // Props to pass down - direction, click function, code for left/right
    return (
        <div>
            {props.char}
        </div>
    )
}

export default Arrow;
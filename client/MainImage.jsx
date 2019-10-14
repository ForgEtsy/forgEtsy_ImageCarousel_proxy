import React from 'react'

const MainImage = (props) => {
    // TODO: Add class name and css file
    const style = {
        backgroundImage: `url(${props.url})`,
        backgroundSize: `cover`,
        backgroundPosition: 'center'
    };
    return (
        <div style={style}></div>
    )
}

export default MainImage;
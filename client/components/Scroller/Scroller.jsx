import React from 'react'
import Style from './Scroller.css';
import MainImage from '../MainImage/MainImage.jsx';
import Arrow from '../Arrow/Arrow.jsx';

const Scroller = ({ url, scrollLeft, scrollRight }) => {
    // TODO: Add class name and css file
    return (
        <div className={Style.scroller}>
            {<Arrow direction={1} onclick={scrollLeft} char="&#9664;"/>}
            {<MainImage url={url} />}
            {<Arrow direction={0} onclick={scrollRight} char="&#9654;"/>}
        </div>
    )
}

export default Scroller;
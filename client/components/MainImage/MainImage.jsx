import React from 'react';
import Style from './MainImage.css';
import Arrow from '../Arrow/Arrow.jsx';

const MainImage = ({ url, scrollLeft, scrollRight }) => {
    return (
        <div className={Style.mainimage}>
            {<Arrow direction={1} onclick={scrollLeft} char="&#9664;"/>}
            {<Arrow direction={0} onclick={scrollRight} char="&#9654;"/>}
            <img src={url}/>
        </div>
    )
}

export default MainImage;
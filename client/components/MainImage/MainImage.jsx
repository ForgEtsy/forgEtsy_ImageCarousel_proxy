import React from 'react';
import Style from './MainImage.css'

const MainImage = ({ url }) => {
    return (
        <div className={Style.mainimage}>
            <img src={url}/>
        </div>
    )
}

export default MainImage;
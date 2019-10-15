import React from 'react';
import Style from './Thumbnail.css';

const Thumbnail = ({ url }) => {
    return (
        <div>
            <img className={Style.thumbnail} src={url}/>
        </div>
    )
}

export default Thumbnail;
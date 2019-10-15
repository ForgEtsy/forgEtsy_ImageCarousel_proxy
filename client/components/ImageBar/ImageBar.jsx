import React from 'react';
import Style from './ImageBar.css'
import Thumbnail from '../Thumbnail/Thumbnail.jsx';

const ImageBar = ({ urls }) => {
    return(
        <div className={Style.imagebar}>
            {urls.map((url, i) => <Thumbnail key={i} url={url} /> )}
        </div>
    )
}

export default ImageBar;
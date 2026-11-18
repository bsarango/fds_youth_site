import React from 'react';

function Announcement({imageSrc}){
    return(
        <div className='announcement-container'>
            <img src={imgSrc} alt='announcement' className='announcement-img'/>
            weekly event/monthly event
        </div>
    )
}

export default Announcement;
import React,{useEffect, useState} from 'react'
import Announcement from './Announcement'
import * as announcement_images from '../assets/annoucement-images'


function Announcements(){

    const [announcements, setAnnouncements] = useState([])
    
    useEffect(()=>{
        function addAnnouncement(){
            
        }
    })

    return(
        <div className='announcements_container'>
            {/* Get a list of all announcements */}
            Where the announcements would go
            
        </div>
    )
}

export default Announcements;
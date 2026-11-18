import React,{useState} from 'react'
import Announcement from './Announcement'
import imageOne from '../assets/annoucement-images/'


function Announcements(){

    const [announcements, setAnnouncements] = useState([])
    

    return(
        <div className='announcements_container'>
            {/* Get a list of all announcements */}
            Where the announcements would go
        </div>
    )
}

export default Announcements;
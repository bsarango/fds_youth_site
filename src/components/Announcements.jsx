import React,{useState} from 'react'
import Announcement from './Announcement'
import image_1 from '../assets/december_121126.png'
import image_2 from '../assets/december_calender_2026.png'



function Announcements(){

    const [announcements, setAnnouncements] = useState([])
    

    return(
        <div className='announcements_container'>
            {/* Get a list of all announcements */}
            Where the announcements would go.
            {/* <img src={image_1} alt='announcement_1'/>
            <img src={image_2} alt='announcement_2'/> */}
        </div>
    )
}

export default Announcements;
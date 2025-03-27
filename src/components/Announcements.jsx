import React,{useState} from 'react'
import Announcement from './Announcement'


function Announcements(){

    const [announcements, setAnnouncements] = useState([])

    function displayAnnouncements(){
        //Use a loop/method to convert data into an announcement component and add to an annoucement state variable
        //Figure out where to place or where to get Announcement data
    }

    return(
        <div className='announcements_container'>
            {/* Get a list of all announcements */}
            Where the announcements would go
            <Announcement/>
        </div>
    )
}

export default Announcements;
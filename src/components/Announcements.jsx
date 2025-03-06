import React,{state} from 'react'
import Announcement from 'Announcement'

function Announcement(){

    const [announcements, setAnnouncements] = useState([])

    function displayAnnouncements(){
        //Use a loop/method to convert data into an announcement component and add to an annoucement state variable
    }

    return(
        <div className='announcements_container'>
            {/* Get a list of all announcements */}
        </div>
    )
}
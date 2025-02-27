import React from 'react'
import Navbar from './Navbar';

function Home(){
    return(
        <div>
            <Navbar/>
            <h2 className="title">Welcome to FDS Youth</h2>
            <h3 className="bio_title">Who we are</h3>
            <p>
                We're a group of young people who are passionate about seeking God <br></br>
                and helping other youth know, grow, and learn in the Lord. <br></br>
                 Our mission is to help Youth reach heaven. We would love for 
                you join us in growing in God!
            </p>
            <h3 className= "announcements_heading">Announcements</h3>
            <h4 className='socials_heading'>Follow Us</h4>
            <h4 className='socials_heading'>Socials</h4>
            <div>
                {/* Make these all icons */}
                <a href="">Instagram</a>
                <a href="https://www.facebook.com/FDSyouthministry/" alt="Facebook">Facebook</a> 
            </div>
        </div>
    )
}

export default Home;


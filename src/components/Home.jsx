import React from 'react'
import Navbar from './Navbar';
import Announcements from './Announcements';
import About from './About'

function Home(){
    return(
        <>
            <Navbar/>
            <About/>
            <h3 className= "announcements_heading">Announcements</h3>
            <div className='announcements_list'>
                <Announcements/>
            </div>
            

            <h4 className='socials_heading'>Follow Us</h4>
            <h4 className='socials_heading'>Socials</h4>
            <div>
                {/* Make these all icons */}
                <ul className='socials_list'>
                    <a className='social_icon' href="">Instagram</a>
                    <a className='social_icon' href="https://www.facebook.com/FDSyouthministry/" alt="Facebook">Facebook</a> 
                </ul>
            </div>
            <div className='site_footer_container'>
                <p className='footer_text'>Place Holder Text</p>
            </div>
        </>
        
    )
}

export default Home;


import React from 'react'
import Navbar from './Navbar';
import Announcements from './Announcements';

function Home(){
    return(
        <div>
            <Navbar/>
            <h2 className="eng_subtitle">Fountain of Salvation Youth</h2>
            <h2 classame="spa_subtitle">Jovenes Fuente de Salvacion</h2>
            <h3 className="bio_title">Who we are</h3>
            <p>
                We're a group of young people who are passionate about seeking God <br></br>
                and helping other youth know, grow, and learn in the Lord. <br></br>
                 Our mission is to help Youth reach heaven. We would love for 
                you join us in growing in God!
            </p>
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
        </div>
    )
}

export default Home;


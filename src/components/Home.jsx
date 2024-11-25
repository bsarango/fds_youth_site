import React from 'react'
import Navbar from './Navbar';

function Home(){
    return(
        <div>
            <Navbar/>
            <h2>Welcome to FDS Youth</h2>
            <h3 className='subtitle'>Who we are</h3>
            <p>
                We're a group of young people who are passionate about seeking God <br></br>
                and helping other youth know, grow, and learn in the Lord. We would love for 
                you join us in growing in God!
            </p>
        </div>
    )
}

export default Home;


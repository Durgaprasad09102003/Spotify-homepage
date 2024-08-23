import React from 'react'
import '../App.css';
import Menu from './Menu';
import bell from '../Assests/bell icon.png'
import profile from '../Assests/profile.jpg'
import fav from '../Assests/album.jpg'


export default function Container() {
  return (
    <div className='body'>
      <Menu />
      <div className='container'>

        

        <div className='theme'>

          <div className='nav'>
            <button id='btn' >Explore Premium</button>
            <img src={bell} alt='' id='bell'/>
            <img src={profile} alt=''id='user'/>
          </div>

          <div className='albumdetails'>
              <img src={fav} alt=''id='myimage'/>
              <div className='album'>
                <h1 id='albumtitle'><b>My Favourities</b></h1>
                <div className='name'>
                  <img src={profile} alt='' id='user2'/>
                  <p>My Name.</p><p>9 songs</p>
                </div>
              </div>
          </div>

        </div>


        <div className='songdata'>
          
        </div>


      </div>
    </div>
  
  )
}

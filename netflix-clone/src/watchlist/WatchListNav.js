import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import './WatchListNav.css'
import AddIcon from '@material-ui/icons/Add';
import Ayush from '../netflix_logo.png'

function WatchListNav() {
    const [show,handleShow]=useState(false)

//   This code helps in getting the little transparent to black transition while scrolling
  function transitionNavbar(){
      if(window.scrollY>100){
          handleShow(true)
      }else{
          handleShow(false)
      }
  }

  useEffect(()=>{
    window.addEventListener('scroll',transitionNavbar)
    return ()=>window.removeEventListener('scroll',transitionNavbar)
  },[])
    return (
      <div className={`watch_nav ${show && "nav_black"}`}>
        <div className="nav_contents">
          <Link to="/">
        <img
          className="nav_logo"
         src={Ayush}/>
         </Link>
         
         <Link to="/add_movie">
          <AddIcon className="addicon"/>
          </Link>
        
         <div className="menu_watchlist_watched">
           <Link className="watched_link" to="/watched">
         Watched
         </Link>
         
         </div>
         <div className="menu_watchlist">
           <Link className="watchlist_link" to="/watchlist">
         WatchList
         </Link>
         
         </div>
            <Link to="/profile">
      <img 
      className="nav_avatar"
    
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
      </Link>
   </div>
   </div>
    )
}

export default WatchListNav

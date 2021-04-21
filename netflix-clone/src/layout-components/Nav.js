import React,{useState,useEffect} from 'react'
import { auth } from '../firebase'
import './Nav.css'
import Ayush from '../netflix_logo.png'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
function Nav({hiddenSearch=false}) {
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
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
              <Link to="/">
            <img
              className="nav_logo"
             src={Ayush}/>
             </Link>
             {!hiddenSearch ?(
                  <Link to="/search">
                  <SearchIcon className="search_icon"/>
                  </Link>
             ):(

             <Link to="/search">
              <SearchIcon className="search_icon_hidden"/>
              </Link>
             )}
             <div className="menu_watchlist">
               <Link to="/watchlist">
             <MenuIcon className="menu_watchlist_icon"/>
             </Link>
             <span>Watchlist</span>
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

export default Nav

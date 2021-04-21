import axios from '../axios'
import React,{useState,useEffect, useContext} from 'react'
import './Banner.css'
import requests from '../Request'

import {Link} from 'react-router-dom'
import {GlobalContext} from '../watchlist/watchlist_context/GlobalState'
function Banner({media_type,id}) {
    const[movie,setMovie]=useState([])
    const {
        addMovieToWatchlist,
   
        watchlist
      } = useContext(GlobalContext);
      let storedMovie = watchlist.find((o) => o.id === movie.id);
      
    
      const watchlistDisabled = storedMovie
        ? true
        
        : false;
    
     
 
    useEffect(()=>{
     async function fetchData(){
         const request=await axios.get(requests.fetchNetflixOriginals);
         setMovie(
             request.data.results[
                 Math.floor(Math.random()*request.data.results.length -1)
             ]
         )
        return request
     }
     fetchData()
    //  setInterval(fetchData,5000)
    },[])
    
    function truncate(string,n){
        return string?.length>n? string.substr(0,n-1)+'....': string

    }
    // const API_KEY="33d6f4d2da86ff2803bb60658bb48436";

    return (
        <header className="banner" style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize:"cover",backgroundPosition:"center center"}}>
            
            
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
              <div className="banner_buttons">
               <button className="banner_button">Play</button>
               <Link to="/watchlist">
               <button className="banner_button"  disabled={watchlistDisabled}
              onClick={() => addMovieToWatchlist(movie)}>My List</button>
               </Link>
              </div>
              <h1 className="banner_description">{truncate(movie?.overview,150)}</h1>
            </div>
            <div className="banner_fadeBottom"/>
        
        </header>
    )
}

export default Banner

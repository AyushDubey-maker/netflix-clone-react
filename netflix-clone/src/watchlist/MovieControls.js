import React,{useContext} from 'react'
import {GlobalContext} from '../watchlist/watchlist_context/GlobalState'
import RemoveIcon from '@material-ui/icons/Remove';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
function MovieControls({type,movie}) {
    const {
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
      } = useContext(GlobalContext);
    return (
        <div className="inner-card-controls">
        {type === "watchlist" && (
          <>
            <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
              <PlaylistAddCheckIcon/>
            </button>
  
            <button
              className="ctrl-btn"
              onClick={() => removeMovieFromWatchlist(movie.id)}
            >
              <RemoveIcon/>
            </button>
          </>
        )}
  
        {type === "watched" && (
          <>
            <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
             <PlaylistAddIcon/>
            </button>
  
            <button
              className="ctrl-btn"
              onClick={() => removeFromWatched(movie.id)}
            >
           <RemoveIcon/>
            </button>
          </>
        )}
      </div>
    )
}

export default MovieControls

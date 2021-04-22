import axios from '../axios'
import React,{useState,useEffect} from 'react'
import './Row.css'
import { makeStyles } from "@material-ui/core/styles";
import {  Modal } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display:'flex',
    flexDirection:'column'
  },
}));
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  

  };
}
function Row({title,fetchUrl,isLargeRow=false}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
    const [movies,setMovies]=useState([])
    const [open,setOpen]=useState(false)
    const [content,setContent]=useState([])
    
    const handleOpen = (value) => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const base_URL="https://image.tmdb.org/t/p/original"
    useEffect(()=>{
      async function fetchData(){
          const request=await axios.get(fetchUrl);
          setMovies(request.data.results);
         
          return request
      }
      fetchData();
    },[fetchUrl])

    function truncate(string,n){
      return string?.length>n? string.substr(0,n-1)+'....': string

  }
    return (
      <div className="row">
        {/* When click on movie poster open up a Modal */}
         <Modal open={open} onClose={handleClose} className="modal">
        <div style={modalStyle} className={classes.paper}>
          <CancelIcon style={{cursor:'pointer'}} onClick={handleClose} color="secondary"></CancelIcon>
        <>
            <h3>{content.title || content.name}</h3>
            <img src={`${base_URL}${
                 content.poster_path || content.backdrop_path
              }`} style={{height:'450px'}}/>
              <p>{truncate(content?.overview,250)}</p>
        
            </>
         
          </div>
          </Modal>
          
          <h2>{title}</h2>  
           
          <div  className="raw_posters">
         
          {movies.map((movie)=>(
            ((isLargeRow && movie.poster_path)||
                (!isLargeRow && movie.backdrop_path))&&(

              <img 
              className={`raw_poster ${isLargeRow && "row_posterLarge"}`}
              key={movie.id}
              src={`${base_URL}${
                  isLargeRow?movie.poster_path:movie.backdrop_path
              }`} alt={movie.name} onClick={()=>handleOpen(setContent(movie))}/>
)
              ))}
            
          </div>
           
        </div>
    )
}

export default Row

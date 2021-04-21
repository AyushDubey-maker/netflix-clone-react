import {
    Button,
    createMuiTheme,
    Tab,
    Tabs,
    TextField,
    ThemeProvider,
  } from "@material-ui/core";
  import SearchIcon from '@material-ui/icons/Search';

import React,{useState,useEffect} from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import './SearchPage.css'
import axios from "axios";

import SingleContent from "../components/SingleContent/SingleContent";
import Pagination from '../components/Pagination/Pagination'
import Footer from "../layout-components/Footer";
function SearchPage() {
    const API_KEY="33d6f4d2da86ff2803bb60658bb48436";
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
     const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
  
    //UseEffect
    useEffect(()=>{
      window.scroll(0,0)
      fetchSearch()

    },[type,page])
    const darkTheme = createMuiTheme({
        palette: {
          type: "dark",
          primary: {
            main: "#fff",
          },
        },
      });
      const fetchSearch = async (e) => {
        try {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
            API_KEY
            }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
          );
          setContent(data.results);
          setNumOfPages(data.total_pages);
           
        } catch (error) {
          console.error(error);
        }
      };
    return (
      <div>
      <div>
        
      </div>
        <ThemeProvider theme={darkTheme}>
            
        <div className="search_page">
           
           
                <TextField
                style={{flex:1}}
                className="searchBox"
                label="Search"
                variant="filled"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={event=>{
                  if(event.key==='Enter'){
                      fetchSearch()
                  }
              }}
                />
                {searchText?(

                <Button onClick={()=>setSearchText('')}>
                <ClearIcon className="clear_icon"/>
               </Button>
                ):(
                    <>
                    </>
                )}
                   <Button
            onClick={fetchSearch}
            
            style={{ marginLeft: 5 }}
          >
            <SearchIcon fontSize="large" />
          </Button>

           
        </div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1)
           
          }}
          style={{ paddingBottom: 5 }}
          aria-label="disabled tabs example"
        >
          <Tab style={{ width: "50%" }} label="Search Movies"/>
          <Tab style={{ width: "50%" }} label="Search TV Series" />
        </Tabs>
        </ThemeProvider>
        <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h1>No Series Found</h1> : alert("No Movies Found"))}
      </div>
      {numOfPages > 1 && (
        <>
        <Pagination setPage={setPage} numOfPages={numOfPages} />
       <Footer/> 
       </>
      )}
</div>

    )
}

export default SearchPage

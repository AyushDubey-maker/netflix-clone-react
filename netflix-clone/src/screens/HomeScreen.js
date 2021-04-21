import React from 'react'
import Banner from '../layout-components/Banner'
import './HomeScreen.css'
import Nav from '../layout-components/Nav'
import requests from '../Request'


import Row from '../layout-components/Row'
function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav/>
            
            <Banner/>

       
            <Row title="Netflix Originals"  fetchUrl={requests.fetchNetflixOriginals} isLargeRow   />
         
           
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}  />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}  />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}  />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaryMovies} />

        </div>
    )
}

export default HomeScreen

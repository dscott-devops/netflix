
import React, { useState } from 'react';
import './App.css';
import Row from './Components/Row/Row';
import requests from './requests'
import Banner from './Components/Banner/Banner';
import Nav from './Components/Nav/Nav';

function App() {
  {/* Nav Bar */}
  
  return (
    
    <div className="app">
      <Nav/>
      <Banner />
     <Row title="NETFLIX Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} isLargeRow/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentaries}/>


      
    </div>
  );
}

export default App;

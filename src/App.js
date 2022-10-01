
import React, { useState } from 'react';
import './App.css';
import Row from './Components/Row/Row';
import requests from './requests'

function App() {
 
  return (
    <div className="App">
     <Row title="NETFLIX Originals" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Comedies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentaries}/>


      
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import axios from '../../axios'
import "./Row.css"

const Row = ({title,fetchUrl}) => {
    const [movies,setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() =>{

        // make requests for rows
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            console.log("FetchData",request)
            setMovies(request.data.results)
            return request
        }
        fetchData();

    },[fetchUrl])

    console.log("Movies", movies)
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
            {movies.map(movie => (
              <img className="row__poster" src={`${base_url}${movie.poster_path}`} alt={movie.name} />
            ))}
        </div>
        {/* title */}
         {/* container */}

    </div>
  )
}

export default Row

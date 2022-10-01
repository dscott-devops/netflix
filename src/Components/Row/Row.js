import React, { useEffect, useState } from 'react';
import axios from '../../axios'
import "./Row.css"

const Row = ({title,fetchUrl, isLargeRow}) => {
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

    //console.log("Movies", movies)

    

    //https://image.tmdb.org/t/p/original/ymbuoBoL1i94xAOzVJF6IuWLfD.jpg
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row__posters">
            {movies.map(movie => (
              <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`}  
              alt={movie.name} />
            ))}
        </div>
        {/* title */}
         {/* container */}

    </div>
  )
}

export default Row

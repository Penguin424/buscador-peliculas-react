import React, {useState, useEffect} from 'react';
import {CardMovie} from './CardMovie/index';


const MoviesList = ({movies}) => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        setMovie(movies)
    },[movies])

    const _listMovie = (pelicula) => {
       return ( pelicula.map(movie => {

            const {Title, Year, Poster, imdbID} = movie
  
            return( 
                <div  key={imdbID}>
                    <CardMovie 
                    title={Title} 
                    poster={Poster} 
                    year={Year} 
                    id={imdbID}
                    />
                </div>
            )
        }));
    }

    console.log(movie);

    return (
        <div className="MoviesList" >
            {(!movie || null ) ? <p className="notFound" >Busqueda no econtrada</p>:_listMovie(movie)}
        </div>
    );
};

export {MoviesList};
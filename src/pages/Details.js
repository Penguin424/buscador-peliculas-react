import React, {useState, useEffect} from 'react';
import {_movieForId} from '../services/fetch.get.res';
import 'bootstrap/dist/css/bootstrap.min.css';

import {CardMovieDetails} from '../components/CardMovieDetails';


const Details = () => {

    const [idMovie, setIdMovie] = useState({});

    const dataFetch = async() => {

        let url = new URL(window.location);
        let id = url.searchParams.get('id');

        let movieDetails =  await _movieForId(id);

        setIdMovie(movieDetails);
    }

    useEffect( () => {
        dataFetch();

    }, []);

    console.log(idMovie)

    const {Poster, Title, Actors, Director, Year} = idMovie

    return (
        <div>
            <CardMovieDetails 
            poster={Poster} 
            titleMovie={Title} 
            actors={Actors} 
            director={Director}
            year={Year} 
            />
        </div>
    );
};

export {Details};
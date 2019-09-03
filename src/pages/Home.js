import React, {useState} from 'react';

import { Title } from '../components/Title/index';
import {SerachForm} from '../components/SearchFrom/index'
import { MoviesList } from '../components/MoviesList/index';

import 'bulma/css/bulma.css';
import '../App.css'

const Home = () => {

    const [search, setSearch] = useState([]);

    const _handlerSearch = ( searchs ) =>{
      setSearch(searchs);
    }

    return (
        <div className="App">

            <Title> Bucador de peliculas </Title>
            <div className="SerachForm-rapper">
                <SerachForm upSerach={_handlerSearch} />   
            </div>
            <div className="container-flex">
                <MoviesList movies={search}  />
            </div>
            

        </div>
    );
};

export {Home};
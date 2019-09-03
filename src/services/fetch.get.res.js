import { apiKey } from '../consts/constantes.api.movies';

const _movieForId = async(idMovie) => {
    
    let res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${idMovie}`);
    let data = await res.json();

    return data;
}

export {_movieForId};
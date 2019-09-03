import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const CardMovieDetails = ({poster, titleMovie, actors, director, year}) => {

    return (
        <div className="col-6 movieCardDetail"  >
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={poster} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{titleMovie}</h5>
                        <p className="card-text">Actores: {actors}</p>
                        <p className="card-text">Director: {director}</p>
                        <p className="card-text">Año de estreno: {year}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {CardMovieDetails};
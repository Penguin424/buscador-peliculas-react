import React from 'react';
import 'bulma/css/bulma.css'
import { Link } from 'react-router-dom';

const CardMovie = ({poster, title ,id}) => {
    return (
        <div key={id}>
            <Link className="card" to={`Details/?id=${id}`}>
                <img 
                src={poster}
                alt={"Placeholder image" || title} 
                />
            </Link>
        </div>
    );
};

export {CardMovie};
import React from 'react';
import 'bulma/css/bulma.css'

const Title = ({children}) => {
    return (
        <div>
            <h1 className="title" >{children}</h1>
        </div>
    );
};

export {Title};
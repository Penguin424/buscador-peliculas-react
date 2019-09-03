import React, { useState} from 'react';
import 'bulma/css/bulma.css'
import {apiKey} from '../../consts/constantes.api.movies';

const SerachForm = ({upSerach}) => {

    const [form, setForm] = useState('');

    const onChangeForm = (e) => {

        return setForm(e.target.value)
        
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        let res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${form}`)
        let data = await res.json()

        console.log(data)

        upSerach(data.Search);
        
    }
    
    return (
        <form onSubmit={onSubmitForm} >

            <div>
                <div className="field has-addons">

                    <div className="control">
                        <input 
                        className="input" 
                        onChange={onChangeForm}
                        type="text" 
                        placeholder="Find a repository" 
                        value={form || ""}
                        />
                    </div>

                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>

                </div>
            </div>

        </form>

        );
}

export {SerachForm};
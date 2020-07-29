import React from 'react'

const SearchBar = ({onSubmit, onChange, value})=> (

    <div className = "jumbotron">
        <h1> La mejor página buscadora de imagenes!</h1>
        <form onSubmit = {onSubmit}>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputBusqueda" 
                    placeholder = "Búsqueda: Ej. Universo"
                    onChange = {onChange}
                    value = {value}/>
            </div>
            <button 
                type="submit" 
                className="btn btn-primary">
                Buscar
            </button>
        </form>
    </div>

)

export default SearchBar

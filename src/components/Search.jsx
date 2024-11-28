import React, { useState } from 'react';

const App = () => {
    const [inputValue, setInputValue] = useState('')
    const [movies, setMovies] = useState([])


    const handleSearch = async (e) => {
        e.preventDefault()
        if (!inputValue) {
            alert('Type something valid!')
            return
        }

        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=24faa0b7529453b64425163aebff3dbe&query=${encodeURIComponent(inputValue)}`

        fetch(apiUrl)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                if (data && data.results) {
                    setMovies(data.results)
                } else {
                    setMovies([])
                    setError('No film found!')
                }
            })
            
    };

    return (
        <div>
            <h1>Search a film</h1>

            <form onSubmit={handleSearch}>
                <input
                    type='text'
                    placeholder='Type a title...'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type='submit'>
                    Search
                </button>
            </form>

            <div>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>Titolo Originale: {movie.original_title}</p>
                        <p>Lingua: {movie.original_language}</p>
                        <p>Voto: {movie.vote_average}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;

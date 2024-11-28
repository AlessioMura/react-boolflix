import React, { useState } from 'react';

const App = () => {
    const [inputValue, setInputValue] = useState('')
    const [result, setResult] = useState([])


    const handleSearch = async (e) => {
        e.preventDefault()
        if (!inputValue) {
            alert('Type something valid!')
            return
        }

        const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=24faa0b7529453b64425163aebff3dbe&query=${encodeURIComponent(inputValue)}`
        const tvUrl = `https://api.themoviedb.org/3/search/tv?api_key=24faa0b7529453b64425163aebff3dbe&query=${encodeURIComponent(inputValue)}`

        setResult([])


        try {
            const movieResponse = await fetch(movieUrl)
            const movieData = await movieResponse.json()
            const movies = movieData.results.map((movie) => ({
                id: movie.id,
                title: movie.title,
                originalTitle: movie.original_title,
                language: movie.original_language,
                vote: movie.vote_average,
                type: "Film",
            }))

            const tvResponse = await fetch(tvUrl)
            const tvData = await tvResponse.json()
            const tvShows = tvData.results.map((tv) => ({
                id: tv.id,
                title: tv.name,
                originalTitle: tv.original_name,
                language: tv.original_language,
                vote: tv.vote_average,
                type: "TV Series",
            }))

            setResult([...movies, ...tvShows])
        } catch (err) {
            console.log(err)
        }

    }

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
                {result.map((item) => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>Original Title: {item.originalTitle}</p>
                        <p>Language: {item.language}</p>
                        <p>Score: {item.vote}</p>
                        <p>Type: {item.type}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App;

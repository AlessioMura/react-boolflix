import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const calculateStars = (vote) => Math.round((vote / 10) * 5);

const StarRating = ({ stars }) => {
    const totalStars = 5;
    return (
        <div>
            {Array.from({ length: totalStars }, (_, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={index < stars ? solidStar : regularStar}
                />
            ))}
        </div>
    );
};

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
                posterPath: movie.poster_path
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
                posterPath: tv.poster_path
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
                        <p>Type: {item.type}</p>
                        {item.posterPath ? (
                            <img
                            src={`https://image.tmdb.org/t/p/w200${item.posterPath}`}
                            alt={item.title}
                            style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
                            />
                        ) : (
                            <p>No image available</p>
                        )}
                        <StarRating stars={calculateStars(item.vote)} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App;

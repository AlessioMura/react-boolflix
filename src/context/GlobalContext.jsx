import { createContext, useContext, useState } from "react";
const GlobalContext = createContext()

function GlobalContextProvider({ children }) {

    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])

    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}`
    const tvUrl = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${search}`



    async function handleSearchSubmit(e) {
        e.preventDefault()


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

            setResults([...movies, ...tvShows])
        } catch (err) {
            console.log(err)
        }

    }

    const values = {
        results,
        setResults,
        search,
        setSearch,
        handleSearchSubmit
    }

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext)
}

export { GlobalContextProvider, useGlobalContext }
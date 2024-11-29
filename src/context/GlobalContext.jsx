import { createContext, useContext, useState } from "react";
const GlobalContext = createContext()

function GlobalContextProvider({ children }) {

    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])

    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY
    const base_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}`


    function handleSearchSubmit(e) {
        e.preventDefault()
        console.log(base_api_url);


        fetch(base_api_url)
            .then((res) => res.json())
            .then(({ results }) => {
                console.log(results);
                setMovies(results)
            })
    }

    const values = {
        movies,
        setMovies,
        search,
        setSearch,
        base_api_url,
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
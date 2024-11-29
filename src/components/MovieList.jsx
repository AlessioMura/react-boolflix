import { useGlobalContext } from '../context/GlobalContext'


function MovieList() {
    const { movies } = useGlobalContext()


    return (
        <ul>
            {movies && movies.map((movie, index) => (
                <li key={index}>
                    Title: {movie.title} <br />
                    Original Title: {movie.original_title} <br />
                    Language: {movie.original_language} <br />
                    Score: {moveBy.vote_avarage}
                    <hr />
                </li>
            ))}
        </ul>
    )
}


export { MovieList }
import { useGlobalContext } from '../context/GlobalContext'
import { calculateStars, StarRating } from "./Score";


function MovieList() {
    const { results } = useGlobalContext()


    return (
        <div>
                {results.map((item) => (
                    <div key={item.id}>
                        <hr />
                        <h2>{item.title}</h2>
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
                        <p>Original Title: {item.originalTitle}</p>
                        <p>Language: {item.language}</p>
                        <p>Type: {item.type}</p>
                        
                    </div>
                ))}
            </div>
    )
}


export { MovieList }
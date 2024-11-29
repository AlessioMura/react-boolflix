import style from './MovieList.module.css'
import { useGlobalContext } from '../../context/GlobalContext'
import { calculateStars, StarRating } from "../Score/Score";


function MovieList() {
    const { results } = useGlobalContext()


    return (
        <div className={style.container}>
            {results.map((item) => (
                <div key={item.id} className={style.card}>
                    {item.posterPath ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w200${item.posterPath}`}
                            alt={item.title}
                            style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
                        />
                    ) : (
                        <p>No image available</p>
                    )}
                    <div className='description'>
                        <h2>{item.title}</h2>
                        <StarRating stars={calculateStars(item.vote)} />
                        <p>Original Title: {item.originalTitle}</p>
                        <p>Language: {item.language}</p>
                        <p>Type: {item.type}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}


export { MovieList }
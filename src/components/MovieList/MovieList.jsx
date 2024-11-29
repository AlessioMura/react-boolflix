import style from './MovieList.module.css'
import { useGlobalContext } from '../../context/GlobalContext'
import { calculateStars, StarRating } from "../Score/Score";


function MovieList() {
    const { results } = useGlobalContext()


    return (
        <div className={style.container}>
            {results.map((item) => (
                <div key={item.id} className={style.card} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w342${item.posterPath})` }}>
                    
                    <div className={style.description}>
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
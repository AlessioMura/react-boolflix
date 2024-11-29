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

export { calculateStars, StarRating }
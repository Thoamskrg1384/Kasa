import Star from './star';
import './style.scss'


export default function Stars({ rating }) {
  const starsArray = Array.from({ length: 5 }, (_, index) => (
    <Star key={index} lightOn={index < rating} />
  ));

  return <div className="stars__container">{starsArray}</div>;
}

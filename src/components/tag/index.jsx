import './style.scss';

export default function Tag({ tags }) {
  return (
    <div className='tags__container'>
      {tags.map((tag, id) => (
        <p className='tags__item' key={id}>{tag}</p>
      ))}
    </div>
  );
}

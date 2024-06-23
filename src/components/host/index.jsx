import './style.scss';

export default function Host({host}) {
  return (
    <div className='host__container'>
      <p className='host__name'>{host.name}</p>
      <img src={host.picture} alt={host.name} />
    </div>
  );
}

import Dropdown from '../../components/dropdown';
import Tag from '../../components/tag';
import Stars from '../../components/stars'
import './style.scss';

export default function Informations({ title, location, description, equipments, tags, rating, host}) {
  return (
    <div className='flat__informations'>
      <div className='flat__informations--left-column'>
        <h1 className='flat__title'>{title}</h1>
        <p className='flat__location'>{location}</p>
        <Tag tags={tags} />
      </div>
      <div className='flat__informations--right-column'>
      <Host hold={host} />
      <Stars rating={rating}/>
      </div>

      <div className='dropdown__informations__container'>
        <Dropdown title="Description">{description}</Dropdown>
        <Dropdown title="Équipements">
          <ul>
            {equipments.map((equipment, id) => (
              <li key={id}>{equipment}</li>
            ))}
          </ul>
        </Dropdown>
      </div>
        
    </div>
  );
}

import Dropdown from '../../components/dropdown';
import Tag from '../../components/tag';
import './style.scss';

export default function Informations({ title, location, description, equipments, tags }) {
  return (
    <div className='flat__informations'>
      <div>
        <h1 className='flat__title'>{title}</h1>
        <p className='flat__location'>{location}</p>
      </div>
      <Tag tags={tags} />
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

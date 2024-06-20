import Dropdown from '../../components/dropdown';

import './style.scss'


export default function Informations ({title, location, description, equipments}) {
  
  return (
    <div className='flat__informations'>
      <h1 className={ 'flat__title' }>{ title }</h1>
      <p className={ 'flat__location' }>{ location }</p>


        <div className={ 'dropdown__informations__container' }>
          <Dropdown title={ "Description" }> {description} </Dropdown>
          <Dropdown title={ "Équipements" }>{ equipments }</Dropdown>
        </div>
    </div>
  )
}
import { Link } from "react-router-dom";
import {routes} from '../../router/routes'; 
import './style.scss'

export default function Card ({ id, title, cover } ) {
  return (
    <Link to={routes.flat(id)} className={ 'card' }> 
      <div className={ 'card__figure' }>
        <img src={ cover } alt={`${ title } cover` } />
      </div>
      <h2 className={ 'card__title' }>{ title }</h2>
    </Link>
  )
}
import { Link } from "react-router-dom";
import {routes} from "../../router/routes.js";
import './style.scss'

export default function Card ({ title, cover } ) {
  return (
    <Link to={routes.flat} className={ 'card' }> 
      <div className={ 'card__figure' }>
        <img src={cover} alt={`${title} cover` } />
      </div>
      <h2 className={ 'card__title' }>{title}</h2>
    </Link>
  )
}
import { Link } from "react-router-dom";
import { routes } from "../../router/routes.js";
import './style.scss'

export default function CodeError ({children}) {
  return (
    <div className="error__container">
      <div className={ 'error' }>
        <p className={ 'error--code' }>404</p>
        <p className= { 'error--pattern' }>{children}</p>
        <Link to={ routes.home } className={ 'back__home' }>Retourner sur la page d&apos;accueil</Link>
      </div>
    </div>
  )
}
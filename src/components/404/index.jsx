import { Link } from "react-router-dom";
import { routes } from "../../router/routes.js";
import './style.scss'

export default function CodeError () {
  return (
    <div className={ 'error' }>
      <p className={ 'error--code' }>404</p>
      <p className= { 'error--pattern' }>Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to={ routes.home } className={ 'back__home' }>Retourner sur la page d&apos;accueil</Link>
    </div>
  )
}
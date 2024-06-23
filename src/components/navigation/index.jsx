
import { Link, NavLink} from "react-router-dom";
import {routes} from "../../router/routes.js";
import logokasa from "../../assets/images/logokasa_desktop.svg"
import "./style.scss"

export default function Navigation() {
    return (
        <nav className={'navigation'}>
            <div className={'container'}>
                <Link  to={routes.home} className={'navigation__image'}>
                    <img src={logokasa} alt="Retour à la page d'accueil" />
                </Link>
                <ul className={'navigation__list'}>
                    <li className={'navigation__item'}>
                        <NavLink to={routes.home} className={ ({isActive}) => `navigation__link ${isActive ? 'active' : ''}`}>Accueil</NavLink>
                    </li>
                    <li className={'navigation__item'}>
                        <NavLink to={routes.about} className={ ({isActive}) => `navigation__link ${isActive ? 'active' : ''}`}>À propos</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

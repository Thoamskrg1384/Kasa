
import { Link } from "react-router-dom";
import {routes} from "../../router/routes.js";
import logokasa from "../../assets/images/logokasa.svg"
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
                        <Link to={routes.home} className={'navigation__link'}>Accueil</Link>
                    </li>
                    <li className={'navigation__item'}>
                        <Link to={routes.about} className={'navigation__link'}>À propos</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

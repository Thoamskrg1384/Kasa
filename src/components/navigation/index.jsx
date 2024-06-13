import React from 'react';
import {Link} from "react-router-dom";
import {routes} from "../../router/routes.js";
import logokasa from "../../assets/images/logokasa.svg"
import "./style.scss"

export default function Navigation() {
    return (
        <div className={'navigation'}>
            <img src={logokasa} alt="logo" />
            <nav>
                <ul className={'navigation__list'}>
                    <li className={'navigation__item'}>
                        <Link to={routes.home} className={'navigation__link'}>Accueil</Link>
                    </li>
                    <li className={'navigation__item'}>
                        <Link to={routes.about} className={'navigation__link'}>À propos</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

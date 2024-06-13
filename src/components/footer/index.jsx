import React from 'react';
import logofooter from '../../assets/images/logofooter.png'
import "./style.scss"

import {routes} from "../../router/routes.js";

export default function Footer() {
    return (
        <div className='footer'>
            <img src={logofooter} alt="logofooter" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

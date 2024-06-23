import React from 'react';
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

import './style.scss'

export default function LayoutDefault({children}) {
    return <>
        <Navigation/>
        {children}
        <Footer />
    </>
}

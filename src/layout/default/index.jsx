import React from 'react';
import Navigation from "../../components/navigation/index.jsx";
import Footer from "../../components/footer/index.jsx";
import Banner from '../../components/banner/index.jsx';

export default function LayoutDefault({children}) {
    return <>
        <Navigation/>
        <Banner />
        {children}
        <Footer />
    </>
}

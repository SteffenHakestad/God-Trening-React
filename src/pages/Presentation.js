import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Presentation() {



    return (
        <>
        <Header 
        HeaderHeadline={"Foredrag"}
        HeaderLink={"God Trening"}
        HeaderLink2={"Tjenester"}
        HeaderLink3={"Foredrag"}
        HeaderAnchor={"/"}
        HeaderAnchor2={"/services"}
        HeaderAnchor3={"/presentation"}
        Display1={"block"}
        Display2={"block"}
        />
        <Footer />
        </>

    );
}





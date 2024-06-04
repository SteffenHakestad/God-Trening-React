import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Diet() {



    return (
        <>
        <Header 
        HeaderHeadline={"Kostveiledning"}
        HeaderLink={"God Trening"}
        HeaderLink2={"Tjenester"}
        HeaderLink3={"Kostveiledning"}
        HeaderAnchor={"/"}
        HeaderAnchor2={"/services"}
        HeaderAnchor3={"/dieting"}
        Display1={"block"}
        Display2={"block"}
        />
        <Footer />
        </>

    );
}





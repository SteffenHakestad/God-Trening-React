import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Consultant() {



    return (
        <>
        <Header 
        HeaderHeadline={"Konsulenttjenester"}
        HeaderLink={"God Trening"}
        HeaderLink2={"Tjenester"}
        HeaderLink3={"Konsulenttjenester"}
        HeaderAnchor={"/"}
        HeaderAnchor2={"/services"}
        HeaderAnchor3={"/consultant"}
        Display1={"block"}
        Display2={"block"}
        />
        <Footer />
        </>

    );
}





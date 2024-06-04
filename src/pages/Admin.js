import React from 'react';
import AdminLoginComponent from '../components/admin/AdminLoginComponent';
import AdminDashboardComponent from '../components/admin/AdminDashboardComponent';
import Header from '../components/Header';
import Footer from '../components/Footer';



export default function Admin() {


    return (
        <>
        <Header 
        HeaderHeadline={"Admin"}
        HeaderLink={"God Trening"}
        HeaderLink2={"Admin"}
        HeaderAnchor={"/"}
        HeaderAnchor2={"/admin"}
        Display1={"block"}
        Display2={"none"}
        />
        <AdminLoginComponent />
        <AdminDashboardComponent />
        <Footer />
        </>
    );
}

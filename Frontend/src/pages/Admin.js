import React, { useState } from 'react';
import AdminLoginComponent from '../components/admin/AdminLoginComponent';
import AdminDashboardComponent from '../components/admin/AdminDashboardComponent';
import Header from '../components/Header';
import Footer from '../components/Footer';



export default function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (username, password) => {
        console.log("handlelogin")
      
      if (username === "1" && password === "1") {
      setIsLoggedIn(true);
  
    } else {
      setIsLoggedIn(false);
      alert("Feil brukernavn eller passord");
    }
  };

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

        {isLoggedIn ? (
            <AdminDashboardComponent />
        ) : (
            <AdminLoginComponent onLogin={handleLogin} />
        )}
        <Footer />
        </>
    );
}

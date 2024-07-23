import React, { useState } from "react";
import AdminLoginComponent from "../components/admin/AdminLoginComponent";
import AdminDashboardComponent from "../components/admin/AdminDashboardComponent";
import Header from "../components/Header";
import Footer from "../components/Footer";

import axios from "axios";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (username, password) => {
    try {
      const res = await axios.post("/api/auth/login", { username, password });
      localStorage.setItem("token", res.data.token);
      setIsLoggedIn(true);
    } catch (error) {
      alert("Invalid credentials");
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

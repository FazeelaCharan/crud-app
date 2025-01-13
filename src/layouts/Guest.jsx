import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Guest = () => {
  return (
    <>
      <div>
        <Navbar />
        <main className="bg-blue-300 min-h-screen">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Guest;

import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <h1>Our Educational Platform</h1>
        </div>
    );
};

export default Home;

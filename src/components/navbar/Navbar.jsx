import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img
                    src="https://www.freeiconspng.com/thumbs/brain-icon-png/brain-icon-png-12.png"
                    alt=""
                />
                <h1>{}</h1>
            </div>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Subjects</li>
                    <li>Materials</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

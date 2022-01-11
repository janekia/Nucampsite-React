import React from "react"
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return(
        <header className="navheader">
            <div className="container mx-auto flex justtify-between">
                <nav className="flex">
                    <NavLink to="/" exact className="inflex-flex items-center py-6 px-3 mr-4">
                        Naturally Glow'n Beauty
                    </NavLink>
                    <NavLink to="/aboutus">
                        About Us
                    </NavLink >
                    <NavLink to="/products">
                       Products
                    </NavLink>
                    <NavLink to="/contactus">
                       Contact Us
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}
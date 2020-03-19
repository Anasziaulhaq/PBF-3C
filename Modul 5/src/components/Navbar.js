import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red">
            <div className="container">
                <b>
                    <Link to='/electronik' className="brand-logo">Televisi</Link>
                    <div>
                        <ul className="right">
                            <li><NavLink to='/electronik'>Televisi</NavLink></li>
                            <li><NavLink to='/handphone'>Iphone</NavLink></li>
                            <li><NavLink to='/komputer'>Laptop/</NavLink></li>
                        </ul>
                    </div>
                </b>
            </div>
        </nav>
    );
}

export default Navbar
import React from 'react'
import { NavLink ,Link ,withRouter } from 'react-router-dom'

const Navbar = (props) => {
  
    return (
        <nav className='nav-wrapper red darken-3'>
            <div className="container">
            <a href="/" className="brand-logo">PokeTimes</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)

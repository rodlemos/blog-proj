import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Navbar = () => {

    return (
        <nav className="navbar dark-box">
            <BsSearch/>
            <input type="text" className="searchbar" placeholder="Search..."/>
            <button type="submit" className="color-btn search-btn">Search</button>
        </nav>
    )
}

export default Navbar

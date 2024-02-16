import React from 'react'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>Navbar
            <a href="/dashboard">Dashbaord</a>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Navbar
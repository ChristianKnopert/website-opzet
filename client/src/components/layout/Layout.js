import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
    return (
        <div className='w-screen min-h-screen overflow-x-hidden'>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout
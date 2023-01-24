import React from 'react'
import logo from '../images/logo.png'
import CartWidget from './CardWidget'

function NavBar (props) {
    return(
        <>
            <nav className='navBar'>
                <a href='#' className='logoContainer'>
                    <img src={logo} alt='logo' className='logo'/>
                </a>
                <ul classname='listCont'>
                    <li ClassName='listItem'><a href='../Home.js'></a>Home</li>
                    <li ClassName='listItem'>My Profile</li>
                    <li ClassName='listItem'>Shop</li>
                </ul>
                <div>
                    <CartWidget></CartWidget>
                </div>
            </nav> 
                   
        </>
    )
}

export default NavBar
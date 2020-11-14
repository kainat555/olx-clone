import React, { Component } from 'react';
import Logo from './Logo.jsx';
import NavigationBar from './NavigationBar.jsx';
import bg_image from './images/bg_img.jpg';




class Header extends Component {
    render() {
        return (
            <div>
                <Logo />
                <NavigationBar />
                <img className='bg_img' src={bg_image} alt=""/>
            </div>
        )
    }
}   


export default Header;
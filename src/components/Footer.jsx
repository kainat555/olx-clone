import React, { Component } from 'react';
import '../../src/App.css';
import Copyright from './Copyright';
// import { FortAwesomeIcon } from '@fortawesome/react-fontawesome';



class Footer extends Component{
    render(){
        return(
            <div>
            <div className='footer'>
                <div className='footer_col'>
                    <h2>popular categories</h2>
                    <ul>
                        <li>cars</li>
                        <li>flats for rents</li>
                        <li>jobs</li>
                        <li>mobile phones</li>
                    </ul>
                </div>
                <div className='footer_col'>
                    <h2>trending searches</h2>
                    <ul>
                        <li>bikes</li>
                        <li>watches</li>
                        <li>books</li>
                        <li>dogs</li>
                    </ul>
                </div>
                <div className='footer_col'>
                    <h2>about us</h2>
                    <ul>
                        <li>about OLX group</li>
                        <li>olx blogs</li>
                        <li>contact us</li>
                        <li>olx for businesses</li>
                    </ul>
                </div>
                <div className='footer_col'>
                    <h2>olx</h2>
                    <ul>
                        <li>help</li>
                        <li>sitemap</li>
                        <li>legal & privacy information</li>
                    </ul>
                </div>
                <div className='footer_col'>
                    <h2>follow us</h2>
                    <ul>
                        <li>{}</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
                <Copyright/>
                </div>
        )
    }
}



export default Footer;
import React, { Component } from 'react';
import logo from './images/logo.png';
import '../../src/App.css';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AddIcon from '@material-ui/icons/Add';


class Logo extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div className="logo">
                    <img src={logo} alt="" width='40' height='35' />
                </div>
                
                <div className='search'>
                {/* <input className='search1' placeholder='Pakistan' type="search" /> */}
                <select className='search1'>
                    {/* <FontAwesomeIcon icon={faSearch}/> */}
                    <option value="">Pakistan</option>
                    <option value="">Sindh</option>
                    <option value="">Islamabad Capital Territory</option>
                    <option value="">Punjab</option>
                    <option value="">Khyber Pakhtunkhwa</option>
                </select>
                    <input className='search2' placeholder='Find Cars, Mobile Phones and more...' type="search" />
                </div>
                <div className='btn_area'>
        <button className='login'>Login <AddIcon/></button>
                    <button className='sell'>SELL</button>
                </div>
            </div>
        )
    }
}



export default Logo;
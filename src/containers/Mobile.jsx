import React, { Component } from 'react';
import '../../src/App.css';
import Header from '../components/Header';
// import mob_img from '../components/images/mob_img.webp';
import Footer from '../components/Footer';
// import NavigationBar from './NavigationBar';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Link } from "react-router-dom";
import LeftCol from '../components/Left_col.jsx'
import Right_col from '../components/Right_col.jsx';


class Mobile extends Component {
//    gotohome = () => {

//    }
 

    // constructor() {
    //     super()
    //     this.state = {
    //         price: '10,000',
    //         image: mob_img,
    //         details: 'This is a dummy text.'
    //     }
    // }

    render() {
        return (
            <div>
                {/* <Link to='/home'>go to home</Link> */}
                    <Header/>
                <div className='mob_section'>
                    <LeftCol />
                    {/* <div className="left_col">
                        <div className="col">
                            <h5>Filters</h5>
                            <h3>CATEGORIES</h3>
                            <h6>All Categories</h6>
                            <ul>
                                <li>Mobile
                            <ul>
                                        <li>Tablets</li>
                                        <li>Accessories</li>
                                        <li>Mobile Phones</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3>LOCATIONS</h3>
                            <p>Pakistan</p>
                            <ul>
                                <li>Punjab</li>
                                <li>Sindh</li>
                                <li>Khyber Pakhtunkhwa</li>
                                <li>Islamabad Capital Territory</li>
                                <li>Balochistan</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3>MAKE</h3>
                            <ul>
                                <li>Samsung</li>
                                <li>Apple</li>
                                <li>Huawei</li>
                                <li>OPPO</li>
                                <li>Vivo</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3>PRICE</h3>
                            <p><input type="text" placeholder='Min'className='limit'/> 
                            <span><input placeholder='Max'className='limit' type="text"/></span></p>
                        </div>
                        <div className="col">
                            <h3>CONDITION</h3>
                            <p><input type="checkbox" className='checkbox' />Used</p>
                            <p><input type="checkbox" className='checkbox' />New</p>
                        </div>
                    </div> */}
                    {/* <div className="right_col">
                        <div className='columns'>
                            <div className='column'>
                                <img className='mob_img' src={mob_img} alt="" />
                                <div className='details'>
                                    <p className='price'>Rs. {this.state.price}</p>
                                    <p>{this.state.details}</p>
                                </div>
                            </div>
                            <div className='column'>
                                <img className='mob_img' src={mob_img} alt="" />
                                <div className='details'>
                                    <p className='price'>Rs. {this.state.price}</p>
                                    <p>{this.state.details}</p>
                                </div>
                            </div>
                            <div className='column'>
                                <img className='mob_img' src={mob_img} alt="" />
                                <div className='details'>
                                    <p className='price'>Rs. {this.state.price}</p>
                                    <p>{this.state.details}</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <Right_col/>
                    <Right_col/>
                    <Right_col/>
                </div>
                <Footer/>
            </div>
        )
    }
}


export default Mobile;
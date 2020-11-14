import React , { Component} from 'react';
import '../App.css'


class Left_col extends Component{
    render(){
        return(
            <div>
                <div className="left_col">
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
                    </div>
            </div>
        )
    }
}


export default Left_col;
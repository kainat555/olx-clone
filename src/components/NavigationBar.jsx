import React, { Component } from 'react';
import '../../src/App.css';
import { Navbar,Nav } from 'react-bootstrap'; 
// both r correct
// import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link} from "react-router-dom"

class NavigationBar extends Component {
    render() {
        return (
            <div className='navbar'>
                <Navbar variant="light">
                    <Navbar.Brand className='nav' to="/"><Link>ALL CATEGORIES</Link></Navbar.Brand>
                    <Nav bg="light" className="mr-auto">
                        <Nav.Link><Link className='link' to="/mobile">Mobile Phones</Link></Nav.Link>
                        <Nav.Link><Link to="/cars">Cars</Link></Nav.Link>
                        <Nav.Link><Link to="/motorcycle">Motorcycles</Link></Nav.Link>
                        <Nav.Link><Link to="/house">Houses</Link></Nav.Link>
                        <Nav.Link><Link to="/tv">TV-Video-Audio</Link></Nav.Link>
                        <Nav.Link><Link to="/tablet">Tablets</Link></Nav.Link>
                        <Nav.Link><Link to="/land">Land & Plots</Link></Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}


export default NavigationBar;
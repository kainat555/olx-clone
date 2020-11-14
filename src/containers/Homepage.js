import React, { Component } from 'react';
import '../../src/App.css';
import Header from '../components/Header.jsx';
import Boxes from '../components/Boxes.jsx';
import Footer from '../components/Footer.jsx';
// import { Link } from "react-router-dom";


class Homepage extends Component {
    render() {
        return (
            <div>

                <Header />
                <Boxes />
                <Boxes />
                <Boxes />
                <Footer />
            </div>
        )
    }
}


export default Homepage;
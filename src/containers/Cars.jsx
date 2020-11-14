import React, { Component } from 'react';
import '../../src/App.css';
import Header from '../components/Header';
import car_img from '../components/images/car_img.jpg';
import Footer from '../components/Footer';
import Left_col from '../components/Left_col';
import Right_col from '../components/Right_col'


class Cars extends Component {
//     constructor(){
//         super()
//         this.state = ({
//             photo:[]
//         })
//     }
//     componentDidMount = () => {
        
//     }
    render() {
        return (
            <div>
                <Header />
                <div className="mob_section">
                    <Left_col />
                    <Right_col src={car_img} />
                </div>
                <Footer />
            </div>
        )
    }
}


export default Cars;
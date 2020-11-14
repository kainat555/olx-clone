// import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
// import { Router, Route } from "react-router-dom";
import Homepage from '../containers/Homepage';
import Mobile from '../containers/Mobile.jsx';
import Cars from '../containers/Cars.jsx';
import Motorcycles from '../containers/Motorcycles.jsx';
import House from '../containers/Houses.jsx';
import TV from '../containers/Tv.jsx';
import Tablets from '../containers/Tablets.jsx';
import Land from '../containers/Land.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class AppRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    
                    <Route exact path='/' component={Homepage} />
                    <Route path='/mobile' component={Mobile} />
                    <Route path='/cars' component={Cars} />
                    <Route path='/motorcycle' component={Motorcycles} />
                    <Route path='/house' component={House} />
                    <Route path='/tv' component={TV} />
                    <Route path='/tablets' component={Tablets} />
                    <Route path='/land' component={Land} />                    
                </Router>
            </div>
        )
    }
}


export default AppRouter;
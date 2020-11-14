import React, {Component} from 'react';
import './App.css';
// import Header from './components/Header.jsx';
// import Boxes from './components/Boxes.jsx';
// import Footer from './components/Footer.jsx';
// import Mobile from './containers/Mobile.jsx'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faSearch,faPlus } from '@fortawesome/free-solid-svg-icons'
// import AppRouter from './config/Router';
import { BrowserRouter, Route} from 'react-router-dom'; 
import Homepage from './containers/Homepage';
import Mobile from './containers/Mobile.jsx';
import Tablets from './containers/Tablets';
import Motorcycles from './containers/Motorcycles';
import Land from './containers/Land';
import House from './containers/Houses';
import Cars from './containers/Cars';
import TV from './containers/Tv.jsx';
// to connect redux from our app
import { connect } from 'react-redux'; 
import reducer from './store/reducer';
import { set_data } from './store/action/index'



class App extends Component {
  render() {
    console.log('redux_data => ', this.props)   //data found
    return (
    <div>
      {/* <Header />
      <Boxes/>
      <Boxes/>
      <Boxes/>
      <Footer />
      <Mobile/>
      <AppRouter /> */}
      <BrowserRouter>
      <Route exact path='/' component={Homepage}/>
      <Route path='/mobile' component={Mobile} />
      <Route path='/cars' component={Cars}/>
      <Route path='/motorcycle' component={Motorcycles}/>
      <Route path='/house' component={House}/>
      <Route path='/tv' component={TV} />
      <Route path='/tablets' component={Tablets}/>
      <Route path='/land' component={Land}/>
      </BrowserRouter>
    </div>
  );
}
}

const mapStateToProps = (state) => ({
    //  name:'kainat'
     users: state.users 

})

const mapDispatchToProp = (dispatch) => ({
  set_data: (data) => 
  dispatch(set_data(data))  // import function from action index
  })

//here we use redux in our app so we keep our App in parenthesis
export default connect(mapStateToProps,mapDispatchToProp) (App);

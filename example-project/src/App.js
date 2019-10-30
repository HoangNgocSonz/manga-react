// import React from 'react';
import './App.css';
import NavBar  from './components/NavBar';
import HomeScreen from './container/HomeScreen'
import DetailScreen from './container/DetailScreen'
import Read from './container/Read'
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Route,Link} from "react-router-dom";
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
        <Route exact path="/" component={HomeScreen}/>
            {/* <Route exact path="/">
              <HomeScreen/>
            </Route> */}
            <Route path="/aa" component={DetailScreen}/>
            <Route path="/cc" component={Read}/>
        </div>

      </BrowserRouter>
    );
  }

}

export default App;

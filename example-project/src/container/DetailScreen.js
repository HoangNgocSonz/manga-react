// import React from 'react';
import NavBar  from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Route,Link} from 'react-router-dom';
class DetailScreen extends Component{
  state={
    data:[],
    images:[],
  };

  componentDidMount(){
    axios
      .get('http://localhost:3001/api/chap')
      .then(data=>{
        console.log(data.data.data);
        this.setState({images:data.data.data});
        // this.setState({images:data.data.data});
        // console.log(this.state.images[0].link);
      })
      .catch(err=>console.log(err));
  }
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          
          <NavBar />
          {this.state.images.length >0 ? 
          <Link to="/cc">
            <p>{this.state.images[0].name}</p>
          </Link>
            
        :''}
        </div>
      </BrowserRouter>
    );
  }

}

export default DetailScreen;

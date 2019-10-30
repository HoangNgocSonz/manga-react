// import React from 'react';
import NavBar  from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Route} from 'react-router-dom';
class Read extends Component{
  state={
    data:[],
    images:[],
  };

  componentDidMount(){
    axios
      .get('http://localhost:3001/api/chap')
      .then(data=>{
        console.log(data.data.data[0].imageLinksId[0].link);
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
            this.state.images[0].imageLinksId.map(img =>
              <img src={img.link}></img>
            )
        :''}
        </div>
      </BrowserRouter>
    );
  }

}

export default Read;

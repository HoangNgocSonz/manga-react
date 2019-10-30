// import React from 'react';
import NavBar  from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import DetailScreen from'./DetailScreen'
class HomeScreen extends Component{
  state={
    data:[],
    images:[],
  };

  componentDidMount(){
    axios
      .get('http://localhost:3001/api/book')
      .then(data=>{
        console.log(data.data.data[0]);
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
       
        {/* <NavBar data={this.state.images}/> */}
        <NavBar />
        {this.state.images.length >0 ? 
          <div className="container">
            <div className="card" style={{width: "18rem"}}>
              <img src={this.state.images[0].avartaLink} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">{this.state.images[0].title}</h5>
                <p className="card-text">{this.state.images[0].description}</p>
                <Link to={"/aa"}>
                  <p className="btn btn-primary">read</p>
                </Link>
                
              </div>
            </div>
            {/* <div className="row">
              <div className="col-3">
                <Link to="/aa">
                  <div className="oneManga">
                    <img src={this.state.images[0].avartaLink} className="avatarImg"></img>
                    <h5>
                    {this.state.images[0].title}
                    </h5>
                  </div>
                </Link>
              </div>
            </div> */}
          </div>
        :''}
      </div>
      </BrowserRouter>
      
    );
  }

}

export default HomeScreen;

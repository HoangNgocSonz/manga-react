// import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import axios from 'axios';

class chapList extends Component{
  state={
    data:[],
    images:[],
  };

  componentDidMount(){
    axios
      .get('http://localhost:3001/api/chap')
      .then(data=>{
          console.log(data);
      })
      .catch(err=>console.log(err));
  }
  render(){
    return(
     <div>AAAAA</div>
    );
  }

}
// function App() {
//   return (
//     <div className="App">
//         <NavBar/>

//     </div>
//   );
// }

export default App;

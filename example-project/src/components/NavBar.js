import React,{Component} from 'react';
import SearchField from './SearchField';
import logo from '../img/superman.png';
import Pofile from'./profile';
import '../App'

class NavBar extends Component{
    render(){
        return(
            <div className="navbar">
                <div className="container">
                    <SearchField/>
                    <div className="col-6">
                        <img src={logo} className="logo"/>
                        <img src={this.props.data && this.props.data[0] && this.props.data[0].link}></img>
                    </div>
                    <Pofile/>
                </div>
            </div>
        );
    }
}
export default NavBar;
import React, { Component } from 'react';
import SearchField from '../components/SearchField';
import logo from '../img/TechkidBrandColor.png';
import Profile from '../components/profile';
import '../App.css';
class Navbar extends Component {
    render() {
        return (
            <div className="navbar mb-3">
                <div className="container">
                     <SearchField  onSearchChanged={this.props.onSearchChange}/>
                     <div className="col-6 text-center">
                        <div className="row">
                           <div className="col-6 ml-auto mr-auto ">
                           <img src={logo} className="img-fluid"/> 
                           </div>
                            
                        </div>
                       
                         
                     </div>
                     <Profile  username={this.props.username} onLogin={this.props.onLogin}/>
                </div>
            </div>
        );
    }
}

export default Navbar;
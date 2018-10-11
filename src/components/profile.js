import React, { Component } from 'react';

class Profile extends Component {
    render() {
        const display = this.props.username ?
       
         (
           
               <span className="navbar-text"> Wellcome, {this.props.username}</span>
            
        ) :
        (
            <button className="btn btn-primary btn-block" onClick={this.props.onLogin}> 
            Login
            </button>
        )

        return  (
            <div className="col-3 text-right profile">{display}</div>
        )
    }
}

export default Profile;
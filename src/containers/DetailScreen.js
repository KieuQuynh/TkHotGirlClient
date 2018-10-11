import React, { Component } from 'react';
import GirlImage from '../components/GirlImage';
import axios from '../axios';
import Navbar from '../components/Navbar'

class DetailScreen extends Component {
    state = {
    };
    componentDidMount() {
        console.log(this.props.match.params.imageID)
        axios.get(`/api/images/${this.props.match.params.imageID}`)
            .then(data => {
               this.setState({ image: data.data });
             
          })
            .catch(err => { console.log(err) });
    } //end didmount
    render() {
        return (
            <div>
                <Navbar onSearchChange={this._onSearchChange} 
                username={this.props.username} onLogin={this.props.onLogin} /> 
                <div className="main_content container ">
                  <div className="row">
                     <div className=" mr-auto ml-auto">
                       {this.state.image ? <GirlImage img={this.state.image}></GirlImage> :''}
                     </div>

                  </div>
                
                </div>
            </div>
        );
    }
}

export default DetailScreen;
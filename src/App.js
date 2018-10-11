import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from './axios';
import HomeScreen from './containers/HomeScreen';
import DetailScreen from './containers/DetailScreen';
import {BrowserRouter , Route} from 'react-router-dom'

class App extends Component {
  state={}

  _onLogin=()=>{
        axios.post("/api/auth",{
          username:'admin',
          password:'123456'
        })
        .then(response=>{
          console.log(response.data)
          this.setState({
            username :response.data.username,
            id:response.data.id
          })
         
        })
        .catch (err=>{console.error(err)});
 
  } //end login 

  render() {
  
    return (
      <BrowserRouter>
      <div className="App">
        <Route exact path='/' render ={(props)=>  <HomeScreen  {...props}username={this.state.username} onLogin={this._onLogin}/> }> </Route>
        {/* <HomeScreen username={this.state.username} onLogin={this._onLogin}/> */}
        <Route exact path='/images/:imageID' render ={(props)=>  <DetailScreen  {...props}username={this.state.username} onLogin={this._onLogin}/> }> </Route>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

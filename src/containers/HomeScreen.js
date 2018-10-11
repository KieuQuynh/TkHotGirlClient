import React, { Component } from 'react';
import axios from '../axios';
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';

class HomeScreen extends Component {

    state = {
        images: [],
        searchString: ''
    };
    componentDidMount() {

        axios.get('/api/images')
            .then(data => {
             this.setState({ images: data.data });

            })
            .catch(err => { console.log(err) });
    } //end didmount

    _onSearchChange = text => { this.setState({ searchString: text }) }
    render() {
        const displayImage = this.state.images.filter(img => img.title.includes(this.state.searchString) ||
            img.description.includes(this.state.searchString)
        )
        return (
            <div>
                <Navbar onSearchChange={this._onSearchChange} username={this.props.username} onLogin={this.props.onLogin} />
                <MainContent images={displayImage} />
            </div>
        );
    }
}

export default HomeScreen;
import React, { Component } from 'react';
import GirlImage from './GirlImage';
import {Link} from 'react-router-dom';
class MainContent extends Component {
    render() {
        const allImages = this.props.images.map(img=> <div className="col-3" key={img._id}>
         <Link style={{ textDecoration: 'none' }} to ={`/images/${img._id}`} >
        <GirlImage img={img }></GirlImage>
        </Link>
        </div> )
        return (
            <div className="container ">
                <div className="row">
                   {allImages}
                </div>
            </div>
        );
    }
}

export default MainContent;
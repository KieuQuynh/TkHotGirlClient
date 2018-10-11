import React, { Component } from 'react';
import  config  from '../config';

class GirlImage extends Component {
    
    render() {
        const comments = this.props.comment ? 
         this.props.img.comment.map(item =>  <p>
         <span className="font-weight-bold">{item.createdBy.username}</span> :{item.content}
         </p> 

        ) :''
        return (
            <div className="info">
                <img src={config.rootPath +this.props.img.imageUrl} className="img-fluid image"/>
                <div class="content ">
                <h4 className="pl-2">{this.props.img.title}</h4>
                 <p className="pl-2">{this.props.img.description}</p>
                 {comments}
               </div>
                
            </div>
        );
    }
}

export default GirlImage;
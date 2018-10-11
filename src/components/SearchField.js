import React, { Component } from 'react';
class componentName extends Component {
    _handleTextChange= event => this.props.onSearchChanged(event.target.value);
    render() {
      
        return (
            <div className="col-3">
            <form className="navbar-form navbar-left " action="">
            <div className="input-group">
              <input type="text" onChange={this._handleTextChange}  className="form-control" placeholder="Search"/>
        
            </div>
          </form>
          </div>
        );
    }
}

export default componentName;
import React, {Component} from 'react';

class NavBar extends Component {
    render() {
      //console.log("Rendering <NavBar />");
      return (
        <div className = "navbar">
          <nav>
          <span className="header"><h1 className="navbar-brand">SnappyChatty</h1></span>
          <span className="usercount"><h3 className="user-count-display">{ this.props.userCount } users online</h3></span>
          </nav>
        </div>
      );
    }
};

export default NavBar;
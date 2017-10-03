import React, {Component} from 'react';

import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class NavBar extends Component {
  render() {
    console.log("Rendering <NavBar />");
    return (
      <div className = "navbar">
        <nav>
        <span className="header"><h1 className="navbar-brand">Chatty</h1></span>
        </nav>
      </div>
    );
  }
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: 'Anonymous' };
  }
  

  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <NavBar />
        <MessageList />
        <ChatBar currentUser={ this.state.currentUser } />
      </div>
    );
  }
}
export default App;


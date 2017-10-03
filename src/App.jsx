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
}


class App extends Component {
  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <NavBar />
        <MessageList />
        <ChatBar />
      </div>
    );
  }
}
export default App;

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
    this.state = {  currentUser: 'Anonymous',
                    messages: [] 
    };
  }

  addNewMessage(user, content) {
    const newMessage = {user, content};
    this.socket.send(JSON.stringify(newMessage));
  }

  
  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onopen = () => {
      console.log("Connected to server");
    }
    this.socket.onmessage = (e) => {
      let messageArray = this.state.messages;
      let newMessageFromServer = JSON.parse(e.data).message;
      messageArray.push(newMessageFromServer);
      this.setState({messages: messageArray});
      console.log(this.state.messages);
    }
  }

  componentWillUnmount() {
    if(this.socket) {
      this.socket.close();
    }
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <NavBar />
        <MessageList messages={ this.state.messages }/>
        <ChatBar currentUser={ this.state.currentUser } messages={ this.state.messages } createMessage={this.addNewMessage.bind(this)} />
      </div>
    );
  }
}
export default App;


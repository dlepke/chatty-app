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
                    messages: [{
                      id: 1,
                      user: 'Bob',
                      content: 'Has anyone seen my marbles?'
                    },
                    {
                      id: 2,
                      user: 'Anonymous',
                      content: 'No, I think you lost them.'
                    }, 
                    {
                      id: 3,
                      user: 'Anonymous1',
                      content: "I want to download food."
                    }] 
    };
    this.socket = new WebSocket("ws://localhost:3001");
  }

  addNewMessage(user, content) {
    const newId = this.state.messages.length + 1;
    const newMessage = {id: newId, user, content};
    const messages = this.state.messages.concat(newMessage)
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages});
  }

  
  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      this.addNewMessage('Michelle', "Hello there!");
    }, 3000);
    this.socket.onopen = () => {
      console.log("Connected to server");
      this.socket.send( this.state.messages );
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


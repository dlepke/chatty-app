import React, {Component} from 'react';

import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  currentUser: 'Anonymous', //default username if none entered
                    currentUserColor: '', //this gets set in websocket server
                    messages: [], 
                    userCount: 0
    };
    console.log(this.state);
  }

  //sends new message to websocket server
  addNewMessage(user, content) { 
    const newMessage = {user, content};
    newMessage.type = 'message';
    this.socket.send(JSON.stringify(newMessage));
  }

  //sends notification message to websocket server
  setNotification(oldUsername, newUsername) { 
    let notification = {};
    notification.oldUsername = oldUsername;
    notification.newUsername = newUsername;
    console.log(this.state);
    notification.content = `${oldUsername} changed their username to ${newUsername}`;
    notification.type = 'notification';
    this.setState({currentUser: newUsername});
    this.socket.send(JSON.stringify(notification));
  }
  
  
  componentDidMount() {
    //console.log("componentDidMount <App />");
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onopen = () => {
      console.log("Connected to server");
    }
    this.socket.onmessage = (e) => {
      let serverMessage = JSON.parse(e.data);
      if (serverMessage.type === 'clientCount') {
        this.setState({userCount: serverMessage.numClients});
        this.setState({currentUserColor: serverMessage.color});
      } else { 
        let messageArray = this.state.messages;
        let newMessageFromServer = serverMessage.message;
        messageArray.push(newMessageFromServer);
        this.setState({messages: messageArray});
      }
    }
  }

  componentWillUnmount() {
    if(this.socket) {
      this.socket.close();
    }
  }

  render() {
    //console.log("Rendering <App/>");
    return (
      <div>
        <NavBar userCount={ this.state.userCount }/>
        <MessageList messages={ this.state.messages } 
                     currentUserColor={ this.state.currentUserColor }/>
        <ChatBar currentUser={ this.state.currentUser } 
                 messages={ this.state.messages } 
                 createMessage={this.addNewMessage.bind(this)} 
                 setNotification={this.setNotification.bind(this)} />
      </div>
    );
  }
}
export default App;


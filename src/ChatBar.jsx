import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      content: ''
    };
  }

  handleEnterKey(event) {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
      this.props.createMessage(this.state.currentUser, this.state.content)
      this.setState({content: ''});
    }
  }

  handleUsernameChange(event) {
    this.setState({currentUser: event.target.value});
  }

  handleContentChange(event) {
    this.setState({content: event.target.value});
  }

  render() {
    console.log("Rendering <ChatBar/>");
    return (
      <footer className="chatbar">
        <input className="chatbar-username" 
               placeholder="Your Name (Optional)" 
               value={ this.state.currentUser } 
               onChange={this.handleUsernameChange.bind(this)} />
        <input className="chatbar-message" 
               placeholder="Type a message and hit ENTER" 
               onChange={this.handleContentChange.bind(this)} 
               value={ this.state.content } 
               onKeyPress={this.handleEnterKey.bind(this)} />
      </footer>
    );
  }
}
export default ChatBar;

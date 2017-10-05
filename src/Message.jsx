import React, {Component} from 'react';

class Message extends Component {
  render() {
    console.log("Rendering <Message />");
    if (this.props.type === 'notification') {
      return (
       <div className="message system">
          <span>{ this.props.content }</span>
        </div>
      )
    } else {
      let fontColor = {
        color: this.props.currentUserColor,
      }
      return (
        <div className="message">
          <span className="message-username" style={fontColor}>{ this.props.user }</span>
          <span className="message-content">{ this.props.content }</span>
        </div>
      );
    }
  }
}

export default Message;

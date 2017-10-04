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
      return (
        <div className="message">
          <span className="message-username">{ this.props.user }</span>
          <span className="message-content">{ this.props.content }</span>
        </div>
      );
    }
  }
}

export default Message;

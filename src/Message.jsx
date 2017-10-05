import React, { Component } from 'react';

class Message extends Component {
  render() {
    console.log("Rendering <Message />");
    if (this.props.type === 'notification') {
      return (
        <div className="message system">
          <span>{this.props.content}</span>
        </div>
      )
    } else {
      let fontColor = {
        color: this.props.currentUserColor,
      }

      //this section detects img urls and renders each message accordingly
      const messageArray = this.props.content.split(' ');
      let firstPart = messageArray;
      let secondPart = [];
      let imgLink = '';
      for (var word in messageArray) {
        if ((messageArray[word].indexOf('.gif') !== -1)
          || (messageArray[word].indexOf('.jpg') !== -1)
          || (messageArray[word].indexOf('.png') !== -1)) {
          imgLink = messageArray[word];
          firstPart = messageArray.slice(0, word);
          secondPart = messageArray.slice(word);
        }
      }
      const processedContent1 = firstPart.join(' ');
      const processedContent2 = secondPart.slice(1).join(' ');

      let messageContent = '';
      if (secondPart.length > 0) {
        messageContent = <div className="message-group">
          <span className="message-content">{processedContent1}</span>
          <img className="imgInput" src={imgLink} />
          <span className="message-content">{processedContent2}</span>
        </div>;
      } else {
        messageContent = <span className="message-content">{processedContent1}</span>;
      }
      return (
        <div className="message">
          <span className="message-username" style={fontColor}>{this.props.user}</span>
          {messageContent}
        </div>
      );
    }
  }
}

export default Message;

import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './App.css';

const colorHexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

class App extends Component {
  state = {
    currentColor: '#5473e2',
    userInput: '',
    userInputMask: '#',
    copied: false
  }

  handleCopiedText = (text, result) => {
    this.setState({copied: true})
    alert(text);
  }

  handleKeyDown = (event) => {
    const inputKey = event.key;
    console.log(inputKey);
    if(!colorHexChars.includes(inputKey.toUpperCase()) && event.keyCode !=='8') {
      event.preventDefault();
    }
  }

  handleChange = (event) => {
    let inputText = event.target.value;
    if(inputText.length <= 6) {
      let paddText = '';
      for (let i = 0; i < 6-inputText.length; i++) {
        paddText += colorHexChars[Math.floor(Math.random()*colorHexChars.length)];
      }
      this.setState({userInputMask: '#'+inputText+paddText, currentColor: '#'+inputText+paddText});
    }

    this.setState({userInput: inputText});

    if(inputText.length === 6) {
      this.setState({currentColor: '#'+inputText});
    }
  }

  render() {
    return (
      <div className="color-fun" style={{background: this.state.currentColor}}>
        <input
          className="inputMask"
          placeholder={this.state.userInputMask}
          id="colorCopy"
          readOnly
        />
        <input
          className="input"
          maxLength="6"
          value={this.state.userInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <CopyToClipboard text={this.state.userInputMask}
          onCopy={this.handleCopiedText}>
          <button>Copy Code</button>
        </CopyToClipboard>

      </div>
    );
  }
}

export default App;

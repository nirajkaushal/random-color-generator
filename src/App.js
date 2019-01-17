import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './App.css';

const colorHexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

class App extends Component {
  state = {
    currentColorMask: '#54ED42',
    colorArray: [],
    copied: false
  }

  componentDidMount() {
    let randomColor = '';
    for (let i = 0; i < 6; i++) {
      randomColor += colorHexChars[Math.floor(Math.random()*colorHexChars.length)];
    }
    this.setState({currentColorMask: `#${randomColor}`})
    document.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    const inputKey = event.key;
    const isValidHexChar = colorHexChars.includes(inputKey.toUpperCase())
    const { colorArray } = this.state
    let paddText = ''

    if (isValidHexChar || inputKey.toUpperCase() === 'BACKSPACE') {

      let newColorArray = []

      if (isValidHexChar) {
        newColorArray = (colorArray.length < 6) ? [...this.state.colorArray, inputKey.toUpperCase()] : colorArray
      }

      if (inputKey.toUpperCase() === 'BACKSPACE' && colorArray.length > 0) {
        newColorArray = [...this.state.colorArray]
        newColorArray.pop()
      }

      for (let i = 0; i < 6-newColorArray.length; i++) {
        paddText += colorHexChars[Math.floor(Math.random()*colorHexChars.length)];
      }

      this.setState({colorArray: newColorArray, currentColorMask: `#${newColorArray.join('')+paddText}`})
    }

  }

  render() {

    const { currentColorMask, colorArray } = this.state

    return (
      <div
        className="app"
        style={{background: this.state.currentColorMask}}
        >
        <div className="color-name-wrapper">
        {currentColorMask.split('').map((char, index) => {
          return <div key={index}>{char}</div>
        })}
        </div>
      </div>
    );
  }
}

export default App;

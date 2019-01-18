import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './App.css';

const colorHexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const generateRandomColor = () => {
  let randomColor = '';
  for (let i = 0; i < 6; i++) {
    randomColor += colorHexChars[Math.floor(Math.random()*colorHexChars.length)];
  }
  return randomColor
}

class App extends Component {
  state = {
    currentColorMask: '#54ED42',
    colorArray: [],
    copied: false
  }

  componentDidMount() {
    this.setState({currentColorMask: `#${generateRandomColor()}`})
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

  handleBodyClick = () => {
    this.setState({currentColorMask: `#${generateRandomColor()}`})
  }

  render() {

    const { currentColorMask, colorArray } = this.state

    document.getElementsByTagName('meta')["theme-color"].content = currentColorMask

    return (
      <div
        className="app noselect"
        style={{background: this.state.currentColorMask}}
        onClick={() => this.handleBodyClick()}
        >
        <div className="color-name-wrapper">
        {currentColorMask.split('').map((char, index) => {
          return <div key={index}>{char}</div>
        })}
        </div>
        <div class="credit">&lt;&gt; by <a href="https://github.com/nirajkaushal" target="_blank">nirajkaushal</a> with <span>&hearts;</span></div>
      </div>
    );
  }
}

export default App;

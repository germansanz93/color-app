import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import NavBar from './NavBar';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 }
    this.changeLevel = this.changeLevel.bind(this)
  }
  changeLevel(level) {
    this.setState({ level })
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => {
      return (<ColorBox
        background={color.hex}
        name={color.name}
      />)
    })
    return (
      <div className='Palette'>
        <NavBar level={level} changeLevel={this.changeLevel}/>
        {/*Navbar goes here*/}
        <div className='Palette-colors'>
          {colorBoxes}
        </div>
        {/*footer eventually*/}
      </div>
    )
  }
}

export default Palette;
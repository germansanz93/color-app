import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Select, MenuItem, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './styles/NavBarStyles';
import { withStyles } from '@material-ui/core/styles';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex', open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }
  closeSnackbar() {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel, showingAllColors, classes } = this.props;
    const { format } = this.state;
    return (
      <header className={classes.NavBar}>
        <div className={classes.logo}>
          <Link to={'/'}>reactcolorpicker</Link>
        </div>
        {showingAllColors && <div>
          <span>Level: {level}</span>
          <div className={classes.slider}>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        }
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value='hex'>HEX - #FFFFFF</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id='message-id'>Format changed to {format}</span>}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color='inherit'
              key='close'
              aria-label='close'>
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    )
  }
}

export default withStyles(styles)(NavBar);
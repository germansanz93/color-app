import React from 'react'
import { withStyles, WithStyles } from '@material-ui/styles'

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    '&:hover button': {
      opacity: '1',
      transition: '0.5s'
    }
  }
}

function DraggableColorBox(props) {
  return (
    <div className={props.classes.root}
      style={{ backgroundColor: props.color }}
    >
      {props.name}
    </div>
  )
}

export default withStyles(styles)(DraggableColorBox);
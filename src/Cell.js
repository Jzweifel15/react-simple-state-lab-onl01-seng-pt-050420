import React from 'react';

class Cell extends React.Component {
  
  constructor(props) {
<<<<<<< HEAD
    super();
=======
    super()
>>>>>>> 46ae03ea62603ae87a12e34f77379c09d2c5e5fd
    this.state = {
      color: props.value
    }
  }
  
  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }
  
  render() {
    return (
      <div 
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }
}

export default Cell;
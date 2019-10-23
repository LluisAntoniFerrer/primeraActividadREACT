import React from 'react';
import '../CSS/Tarea.scss'
import { TwitterPicker } from 'react-color';


class Tarea extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayColorPicker: false,
          };
    }
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
      };
    
    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.props.changeTaskColor(this.props.column, this.props.data,color.hex);
    };

    render () {
        return (
            <div className='Tarea' style={{borderColor: this.props.data.color}}>
                <span title={this.props.data.text} className='text'> {this.props.data.text}</span>
                <div className='actions'>
                    <button className='moveButton' onClick={ props => this.props.moveTask(this.props.column,-1, this.props.data)}>❮</button>
                    <button className="deleteButton" title='Eliminar' onClick={ props => this.props.deleteTask(this.props.column, this.props.data)}>X</button>
                    <button className='moveButton' onClick={ props => this.props.moveTask(this.props.column, 1, this.props.data)}>❯</button>
                    <button className='colorButton' style={ {background: this.props.data.color} } onClick={ this.handleClick }></button>
                    { this.state.displayColorPicker ? <div className='popover'>
                        <div className='cover' onClick={ this.handleClose }/>
                        <TwitterPicker  onChangeComplete={ this.handleClose  } onChange={ this.handleChange} />
                    </div> : null }
                </div>
            </div>
        )
    }
  }

  export default Tarea;
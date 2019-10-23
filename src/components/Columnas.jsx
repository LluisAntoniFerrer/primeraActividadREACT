import React from 'react';
import '../CSS/Columnas.css';
import Tarea from './Tarea'; 

class Columnas extends React.Component {
  
    constructor (props) {
      super(props); 
      const INITIAL = {
        newTaskText: ''
      };
      this.state = INITIAL
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
          this.setState({newTaskText:''})
            this.props.addTask(this.state.newTaskText,this.props.data.id);
        };
    };
  
    render () {
      return (
        <div className="Columnas">
            <h3>{this.props.data.text}</h3>
            <section className='addTask'>
                <input
                    type='text'
                    placeholder='añade tu tarea aquí'
                    value={this.state.newTaskText}
                    onKeyPress={this.handleKeyPress}
                    onChange={event =>
                    this.setState({ newTaskText: event.target.value })
                    }
                />
            </section>
            <hr></hr>
            <main className='taskList'>
                {this.props.data.tasks.map(task => (
                    <Tarea
                    key={task.id}
                    data={task}
                    column={this.props.data.id}
                    moveTask={this.props.moveTask}
                    deleteTask={this.props.deleteTask}
                    changeTaskColor={this.props.changeTaskColor}
                    />
                ))}
            </main>
        </div>
        )    
    }
  }

  export default Columnas;
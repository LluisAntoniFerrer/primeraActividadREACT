import React from 'react';
import Columna from './Columnas';
import generateID from '../services/generateID';
import '../CSS/Panel.css'

class Panel extends React.Component {
    constructor (props) {
      super(props);
      const INITIAL = {
        newColumnaName: '',
        columns: [
            {
                removable: false,	      
                text: 'Do',
                id: generateID()	,
                tasks:[]
            },
            {
                removable: true,	   
                text: 'Doing',
                id: generateID()	,
                tasks:[]
            },
            {
                removable: false,	 
                text: 'Done',
                id: generateID()	,
                tasks:[]
            }
        ]
      };  
      this.state = JSON.parse(localStorage.getItem('TareasState')) || INITIAL;
    }
    saveToLocalStorage() {
      localStorage.setItem('TareasState', JSON.stringify(this.state));
    }
    setStateAndSave = update => {
      this.setState(update, this.saveToLocalStorage);
    };
    moveTask = (from , to, task) => {
        const newTask = {
          text: task.text,
          id: task.id,
          color: task.color
        };
        let toPosition = 0;
        this.setStateAndSave({
          columns: this.state.columns.map((col,i) => {
            if (col.id === from) {
              if(i+to >= 0 && i+to < this.state.columns.length ){
                toPosition = i+to;
                col.tasks.map((colTask,ind) => {
                  if(colTask.id === task.id){
                    col.tasks.splice(ind, 1);
                  };
                  return ''
                })
                this.state.columns[toPosition].tasks.unshift(newTask)
              }
            }
            return col;
          }),
        });
    }
    deleteTask = (from , task) => {
      this.setStateAndSave({
        columns: this.state.columns.map((col,i) => {
          if (col.id === from) {
            col.tasks.map((colTask,ind) => {
                if(colTask.id === task.id){
                  col.tasks.splice(ind, 1);
                };
                return ''
              })
          }
          return col;
        }),
      });
    }
    addTask = (text, id) => {
        text = text.trim();
        if (text) {
          const newTask = {
            text: text,
            id: generateID(),
            color: 'green'
          };
          
          this.setStateAndSave({
            columns: this.state.columns.map(col => {
              if (col.id === id) {
                col.tasks.unshift(newTask)
              }
              return col;
            })
           
        })
        }
    };
    changeTaskColor = (column, task, color) => {
      this.setStateAndSave({
        columns: this.state.columns.map((col,i) => {
          if (col.id === column) {
            col.tasks.map((colTask,ind) => {
                if(colTask.id === task.id){
                  task.color = color;
                };
                return ''
              })
          }
          return col;
        }),
      });
    }
    
  
    render () {
      return (
        <div className='Panel'>
            <main className='columnList'>
            {this.state.columns.map(column => (
                <Columna
                key={column.id}
                data={column}
                addTask={this.addTask}
                moveTask={this.moveTask}
                deleteTask={this.deleteTask}
                changeTaskColor={this.changeTaskColor}
                />
            ))}
            </main>     
        </div>

        )    
    }
  }

  export default Panel;
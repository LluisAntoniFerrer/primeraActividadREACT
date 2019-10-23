import React from 'react';
import Panel from '../components/Panel'
import '../CSS/Kanban.css'

function Kanban() {
  return (
    <div className="App">
      <span className="title">Kanban de tareas</span>
      <Panel></Panel>
    </div>
  );
}

export default Kanban;
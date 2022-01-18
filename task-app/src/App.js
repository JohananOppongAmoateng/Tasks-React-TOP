import { Component } from "react";
import Overview from "./components/Overview";
class App extends Component {
  constructor(){
    super()
    this.state = {
      tasks :[],
      task:{text:"",
      id: Math.random()
      
    }
    }
  }
  handleChange =(e)=>{
    this.setState ({
      task:{
        text:e.target.value,
        id:this.state.task.id
      }
        
    })
  }

  onSubmit =(e) => {
    e.preventDefault()
    this.setState({
      tasks:this.state.tasks.concat(this.state.task),
      task:{
      text:"",
      id: Math.random()
      
    }
    })
  }
 render(){
   const {task,tasks} =this.state
  return (
    <div className="App">
      <form  onSubmit={this.onSubmit}>
        <label htmlFor="taskInput">Enter a task</label>
        <input type="text" id="taskInput" onChange={this.handleChange}/>
        <button type="submit">Add Task</button>
      </form>
      
      <Overview tasks={tasks}/>
    </div>
  
 )};
  
}

export default App;

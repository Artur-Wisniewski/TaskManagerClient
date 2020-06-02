import React, {Component} from 'react';
import ProjectTask from "./ProjectTask/ProjectTask";


class Backlog extends Component {

    render() {
        const {project_tasks} = this.props;
       const tasks = project_tasks.map(task => (
           <ProjectTask key={task.projectSequence} project_task={task}/>
       ));
       let todo = [];
       let inProgres = [];
       let done = [];
       for (let i=0; i<tasks.length; i++){
           switch(tasks[i].props.project_task.status){
               case "DONE":
                   done.push(tasks[i]);
                   break;
               case "IN_PROGRESS":
                   inProgres.push(tasks[i]);
                   break;
               default:
                   todo.push(tasks[i])
           }
       }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-secondary text-white">
                                <h3>TO DO</h3>
                            </div>
                        </div>
                        {todo}
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>In Progress</h3>
                            </div>
                        </div>
                        {inProgres}
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>Done</h3>
                            </div>
                        </div>
                        {done}
                    </div>
                </div>
            </div>
        );
    }
}

export default Backlog;

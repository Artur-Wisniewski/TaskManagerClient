import React, {Component} from 'react';
import ProjectTask from "./ProjectTask/ProjectTask";


class Backlog extends Component {

    render() {

        //TODO refactor this
        const {project_tasks} = this.props;
        const todoTasks = project_tasks.filter(project_task => project_task.status === "TO_DO").map(project_task => (
            <ProjectTask key={project_task.id} project_task={project_task}/>
        ));
       const inProgressTasks = project_tasks.filter(project_task => project_task.status === "IN_PROGRESS").map(project_task => (
           <ProjectTask key={project_task.id} project_task={project_task}/>
       ));
        const doneTasks = project_tasks.filter(project_task => project_task.status === "DONE").map(project_task => (
            <ProjectTask key={project_task.id} project_task={project_task}/>
        ));
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-secondary text-white">
                                <h3>TO DO</h3>
                            </div>
                        </div>
                        {todoTasks}




                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>In Progress</h3>
                            </div>
                        </div>
                        {inProgressTasks}

                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>Done</h3>
                            </div>
                        </div>
                        {doneTasks}

                    </div>
                </div>
            </div>
        );
    }
}

export default Backlog;

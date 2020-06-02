import React, {Component} from 'react';
import classnames from "classnames"
import {Link} from 'react-router-dom';
class ProjectTask extends Component {
    render() {
        const {project_task} = this.props;


        return (
            <div className="card mb-1 bg-light ">

                <div className={classnames("card-header text-white ",{
                    "bg-danger": (project_task.priority === 1),
                    "bg-success": (project_task.priority === 2),
                    "bg-secondary": (project_task.priority === 3)

                })}>

                    ID: {project_task.projectSequence}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{project_task.summary}</h5>
                    <p className="card-text text-truncate ">
                        {project_task.acceptanceCriteria}
                    </p>
                    <Link to={`/updateProjectTask/${project_task.projectIdentifier}/${project_task.projectSequence}`} className="btn btn-primary">
                        View / Update
                    </Link>

                    <button className="btn btn-danger ml-4">
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default ProjectTask;

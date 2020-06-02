import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import classnames from "classnames";
import {getProjectTask, patchProjectTask} from "../../../../actions/backlogActions";
import PropTypes from "prop-types";

class UpdateProjectTask extends Component {
    constructor(props) {
        super(props);
        const {id} = this.props.match.params;
        this.state = {
            summary: "",
            acceptanceCriteria: "",
            status: "",
            priority: 0,
            dueDate: "",
            projectIdentifier:id,
            errors:{}
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onSubmit(event){
        event.preventDefault();
        const newTask = {

            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status,
            priority: this.state.priority,
            dueDate: this.state.dueDate,
        };
        console.log(newTask);
        this.props.addProjectTask(this.state.projectIdentifier, newTask, this.props.history);
    }
    componentDidMount(){
        const {id} = this.props.match.params;
        const {pt} = this.props.match.params;
        this.props.getProjectTask(id,pt, this.props.history);
    }
    onChange(event){
        this.setState({[event.target.name]:event.target.value})
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({
                errors:nextProps.errors
            })
        }
        const {
            summary,
            acceptanceCriteria,
            status,
            priority,
            dueDate,
            projectIdentifier,
        } = nextProps.project_task
        this.setState({
            summary,
            acceptanceCriteria,
            status,
            priority,
            dueDate,
            projectIdentifier,
        })

    }
    render() {
        const {id} = this.props.match.params;
        return (
            <div className="add-PBI">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={`/projectBoard/${id}`} className="btn btn-light">
                                Back to Project Board
                            </Link>
                            <h4 className="display-4 text-center">Add /Update Project Task</h4>
                            <p className="lead text-center">Project Name + Project Code</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text"
                                           className="form-control form-control-lg"
                                           name="summary"
                                           placeholder="Project Task summary"
                                           onChange={this.onChange}
                                           value={this.state.summary}/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg"
                                              placeholder="Acceptance Criteria"
                                              name="acceptanceCriteria"
                                              onChange={this.onChange}
                                              value={this.state.acceptanceCriteria}></textarea>
                                </div>
                                <h6>Due Date</h6>
                                <div className="form-group">
                                    <input type="date"
                                           className="form-control form-control-lg"
                                           name="dueDate"
                                           onChange={this.onChange}
                                           value={this.state.dueDate}/>
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control-lg"
                                            name="priority"
                                            onChange={this.onChange}
                                            value={this.state.priority}>
                                        <option value={0}>Select Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <select className="form-control form-control-lg"
                                            name="status"
                                            onChange={this.onChange}
                                            value={this.state.status}>
                                        <option value="">Select Status</option>
                                        <option value="TO_DO">TO DO</option>
                                        <option value="IN_PROGRESS">IN PROGRESS</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
UpdateProjectTask.propTypes = {
    getProjectTask: PropTypes.func.isRequired,
    patchProjectTask: PropTypes.func.isRequired,
    project_task: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    errors:state.errors,
    project_task:state.backlog.project_task
});


export default connect(mapStateToProps, {getProjectTask, patchProjectTask})(UpdateProjectTask);

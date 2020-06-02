import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Backlog from "./Backlog";
import {connect} from "react-redux";
import {getBacklog} from "../../../actions/backlogActions";
import PropTypes from "prop-types";


class ProjectBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors:{}
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
    }

    componentDidMount(){
        //rest getting projects
        const {id} = this.props.match.params;
        this.props.getBacklog(id);
    }

    render() {
        const {id} = this.props.match.params;
        const {project_tasks} = this.props.backlog;
        const {errors} = this.state;

        let boardContent;
        //TODO extract this
        const boardAlgorith = (errors, project_tasks) =>{
            if(project_tasks.length < 1){
                if(errors.projectNotFound){
                    return (
                        <div className="alert alert-danger text-center" role="alert">
                            {errors.projectNotFound}
                        </div>
                    );
                }else{
                    return(
                    <div className="alert alert-info text-center" role="alert">
                        No project tasks on this board
                    </div>
                    );
                }
            }else {
                return <Backlog project_tasks={project_tasks}/>
            }
        };

        boardContent = boardAlgorith(errors, project_tasks);
        return (
            <div className="container">
                <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create Project Task</i>
                </Link>
                <br/>
                <hr/>
                {boardContent}

            </div>
        );
    }
}
ProjectBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    backlog: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    backlog: state.backlog,
    errors: state.errors
});
export default connect(mapStateToProps,{getBacklog})(ProjectBoard);

import React, {Component} from 'react';
import classnames from "classnames";
import {getProject, createProject} from "../../../actions/projectActions";
import PropTypes from 'prop-types';
import {connect} from "react-redux";


class UpdateProject extends Component {
    constructor() {
        super();

        this.state = {
            id:"",
            projectName: "",
            projectIdentifier:"",
            description:"",
            start_date:"",
            end_date:"",
            errors:{}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({
                errors:nextProps.errors
            })
        }
        const {
            id,
            projectName,
            projectIdentifier,
            description,
            start_date,
            end_date
        } = nextProps.project;
        this.setState({
            id,
            projectName,
            projectIdentifier,
            description,
            start_date,
            end_date
        });
    }
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getProject(id, this.props.history);
    }

    onChange(event){
        this.setState({[event.target.name]:event.target.value})
    }
    onSubmit(event){
        event.preventDefault();
        const newProject = {
            id:this.state.id,
            projectName:this.state.projectName,
            description:this.state.description,
            projectIdentifier: this.state.projectIdentifier,
            start_date:this.state.start_date,
            end_date:this.state.end_date
        };
        console.log(newProject);
        this.props.createProject(newProject, this.props.history);
    }
    render() {
        const {errors} = this.state;
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Update project</h5>
                            <hr/>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text"
                                           className={classnames("form-control form-control-lg ",{
                                               "is-invalid":errors.projectName
                                           })}
                                           placeholder="Project Name"
                                           name="projectName"
                                           value={this.state.projectName}
                                           onChange={this.onChange}
                                    />
                                    {errors.projectName && (<div className="invalid-feedback"> {errors.projectName}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                           className={classnames("form-control form-control-lg ",{
                                               "is-invalid":errors.projectIdentifier
                                           })}
                                           placeholder="Unique Project ID"
                                           name="projectIdentifier"
                                           value={this.state.projectIdentifier}
                                           disabled/>
                                    {errors.projectIdentifier && (<div className="invalid-feedback"> {errors.projectIdentifier}</div>
                                    )}
                                </div>

                                <div className="form-group">
                                    <textarea
                                                className={classnames("form-control form-control-lg ",{
                                                    "is-invalid":errors.description
                                                })}
                                              placeholder="Project Description"
                                              name="description"
                                              value={this.state.description}
                                              onChange={this.onChange}
                                    />
                                    {errors.description && (<div className="invalid-feedback"> {errors.description}</div>
                                    )}
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date"
                                           className="form-control form-control-lg"
                                           name="start_date"
                                           value={this.state.start_date}
                                           onChange={this.onChange}/>
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date"
                                           className="form-control form-control-lg"
                                           name="end_date"
                                           value={this.state.end_date}
                                           onChange={this.onChange}/>
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
UpdateProject.propTypes = {
    getProject:PropTypes.func.isRequired,
    createProject:PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const stateToPropMap = state => ({
    //czemu tak ? bo project jest z reducers/index potem otwiera w initial state jest projekt w danym reducer
    project:state.project.project,
    errors:state.errors
});
                     //statetomap//function to use//class our
export default connect(stateToPropMap,{getProject, createProject})(UpdateProject);

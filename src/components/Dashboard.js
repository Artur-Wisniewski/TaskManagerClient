import React, {Component} from 'react';
import ProjectItem from "./Project/Project/ProjectItem";
import CreateProjectButton from "./Project/Project/CreateProjectButton";
import {connect} from 'react-redux';
import  {getProjects} from "../actions/projectActions";
import PropTypes from "prop-types";



class Dashboard extends Component {

    //life cycle hook this basically dictates what needs to happen when we mount the component
    componentDidMount(){
        //rest getting projects
        this.props.getProjects();
    }


    render() {
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Projects</h1>
                            <br/>
                                <CreateProjectButton/>
                            <br/>
                            <hr/>

                            <ProjectItem></ProjectItem>



                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
//props types z malej litery trzeba pamietac
Dashboard.propTypes = {
    getProjects:PropTypes.func.isRequired,
    project:PropTypes.object.isRequired
};

// uzywa tutaj reducera konkretnie project reducer dzieki temu mozemy ustawic state
const mapStateToProps = state => ({
  project:state.project

});

export default connect(mapStateToProps,{getProjects})(Dashboard);

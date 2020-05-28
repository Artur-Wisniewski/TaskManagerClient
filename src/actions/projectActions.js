import axios from "axios";
import {GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT} from "./types";

export const createProject = (project, history) => async dispatch =>{
    try{
        const res = await axios.post
        ("http://localhost:8080/api/project", project);
        history.push("/dashboard");

        //cleaning errors when post passed
        dispatch({
            type:GET_ERRORS,
            payload:{}
        })
    }catch (err) {
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    }
};

export const getProjects = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/project/all");
  dispatch({
      type:GET_PROJECTS,
      payload: res.data
  })
};
export const getProject = (id, history) => async dispatch => {

    //dispatch reducer with get_project
    //reducer gonna pass it to the state
    try{
        const res = await axios.get(`http://localhost:8080/api/project/${id}` );
        dispatch({
            type:GET_PROJECT,
            payload: res.data
        })
    }catch (e) {
        //przekierowanie jesli nie znajdzie takiego projektu o zadanym id
        history.push("/dashboard");
    }

};
export const deleteProject = id => async dispatch => {

        const res = await axios.delete(`http://localhost:8080/api/project/${id}` );
        dispatch({
            type:DELETE_PROJECT,
            payload: id
        });


};

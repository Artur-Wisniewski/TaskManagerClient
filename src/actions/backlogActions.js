import axios from "axios";
import {GET_ERRORS, GET_BACKLOG, GET_PROJECT_TASK, GET_PROJECT} from "./types";

export const addProjectTask = (backlog_id, project_task, history) => async dispatch => {
    try{
        await axios.post(`/api/backlog/${backlog_id}`, project_task);
        history.push(`/projectBoard/${backlog_id}`);
        dispatch({
           type: GET_ERRORS,
           payload: {}
        });
    }catch (e) {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
    }
};
export const getBacklog = backlog_id => async dispatch =>{
      try{
          const res = await axios.get(`/api/backlog/${backlog_id}`);
          dispatch({
              type: GET_BACKLOG,
              payload: res.data
          });
      }catch (e) {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        })
      }
};

export const getProjectTask = (backlog_id, pt_id, history) => async dispatch => {
  try{
      console.log(`/api/backlog/${backlog_id}/${pt_id}`);
      const res = await axios.get(`/api/backlog/${backlog_id}/${pt_id}`);
      dispatch({
          type:GET_PROJECT_TASK,
          payload: res.data
      })
  } catch (e) {
      history.push("/dashboard");
  }
};
export const patchProjectTask = (backlog_id, pt_id) => async dispatch => {

};

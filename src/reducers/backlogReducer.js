import {GET_BACKLOG, DELETE_PROJECT_TASK, GET_PROJECT_TASK, GET_ERRORS} from "../actions/types"
const initialState = {
    project_tasks:[],
    project_task:{}
};

export default function (state=initialState, action) {
    switch (action.type) {
        case GET_BACKLOG:
            return {
                ...state,
                project_tasks:action.payload
            };
        case GET_PROJECT_TASK:
            return {
                ...state,
                project_task:action.payload
            };
        case DELETE_PROJECT_TASK:
            return {
                ...state,
                //TODO tu bedzie filtrowanie najprawdopodobniej
            };
        default:
            return state;
    }
}

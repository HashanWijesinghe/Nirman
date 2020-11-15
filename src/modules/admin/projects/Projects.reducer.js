export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';

let initialState = {
    projects: [],
    error: null,
}

const projectReducer = (state = initialState, action) => {
    console.log('project reducer');
    switch (action.type) {
        case FETCH_PROJECTS_SUCCESS: {
            return {...state, projects: action.payload}
        }
        default: {
            return state;
        }
    }
}

export default projectReducer;
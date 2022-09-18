import { SET_EMAIL, SET_PASSWORD } from "./action";

const initialState = {
    email: "",
    password: ""
}

function userReducer(initialState, action){
    switch (action.type) {
        case SET_EMAIL:
            return state.username = {...state, email: action.payload};
        case SET_PASSWORD:
            return state.password = {...state, password: action.payload};
        case LOGOUT:
            return state;
        default:
            return state;
    }
}

export default userReducer;
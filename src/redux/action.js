export const SET_USERNAME = 'SET_USERNAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';

export const setUsername = username => dispatch => {
    dispatch({
        type: SET_USERNAME,
        payload: username,
    });
};

export const setEmail = email => dispatch => {
    dispatch({
        type: SET_EMAIL,
        payload: email,
    });
};

export const setPassword = password => dispatch => {
    dispatch({
        type: SET_PASSWORD,
        payload: password,
    });
};
import { combineReducers } from 'redux';

const initialState = {
    token: '',
    posts: [],
    user: [],
    users: []
}

const signInReducer = (state = initialState, action) => {
    
    if(action.type === 'USER_SIGNIN'){
        return {...state, token: action.payload.token, user: action.payload.userInfo}
    }
    return state
}

const postsReducer = (state= initialState, action) => {
    if(action.type === 'LIST_POSTS'){
        return {...state, posts: action.payload}
    }
    return state
}

const usersReducer = (state= initialState, action) => {
    if(action.type === 'LIST_USERS'){
        return {...state, users: action.payload}
    }
    return state
}



export const rootReducer = combineReducers({
    signInReducer,
    postsReducer,
    usersReducer
});



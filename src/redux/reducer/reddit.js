import {
    SELECT_REDDIT,
    INVALIDATE_REDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from '../action'

export const selectedReddit = (state = 'reactjs', action) => {
    switch (action.type) {
        case  SELECT_REDDIT:
            return action.reddit ;
        default :
            return  state ;
    }
}

export const posts = (state ={
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case INVALIDATE_REDDIT:
            return {
                ...state,
                didiInvalidate: true
            }
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate:false,
                items: action.posts,
                lastUpdate: action.receivedAt
            }
        default:
            return state;
    }
}

export const postsByReddit = (state ={ }, action) => {
    switch (action.type){
        case INVALIDATE_REDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return {
                ...state,
                [action.reddit]: posts(state[action.reddit], action)
            }
        default:
            return state
    }
}


import {
    SELECT_REDDIT,
    INVALIDATE_REDDIT,
    RECEIVE_POSTS,
    RECEIVE_POSTS
} from '../action'

const selectedReddit = (state = 'reactjs', action) => {
    switch (action.type) {
        case  SELECT_REDDIT:
            return action.reddit ;
        default :
            return  state ;
    }
}

const posts = (status ={
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case INVALIDATE_REDDIT:

    }
}

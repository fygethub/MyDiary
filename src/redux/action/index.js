//createAction
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_REDDIT = 'SELECT_REDDIT';
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';
export const  ADD_TODO = 'ADD_TODO';
export const  TOGGLE_TODO = 'TOGGLE_TODO';
export const  SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

let nextTodoId = 0;

//add todo
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

// set visibleFilter
export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

//change todo status
export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

export const selectReddit = reddit => ({
    type: SELECT_REDDIT,
    reddit
})

export const invalidateReddit = reddit => ({
    type: INVALIDATE_REDDIT,
    reddit
})

export const requestPosts = reddit => ({
    type: REQUEST_POSTS,
    reddit
})


export const receivePosts = (reddit, json) => ({
    type: RECEIVE_POSTS,
    reddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
})

export const fetchPosts = reddit => dispatch => {
    dispatch(requestPosts(reddit));
    dispatch(changeLoading(true))
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
        .then(response => response.json())
        .then(json => {dispatch(receivePosts(reddit,json)); dispatch(changeLoading(false))})
}


export const shouldFetchPosts = (state, reddit) => {
    const posts = state.postsByReddit[reddit]
    if(!posts) {
        return true;
    }

    if(posts.isFetching){
        return false;
    }

    return posts.didInvalidate;
}

export const fetchPostsIfNeeded = reddit => (dispatch, getState) => {
    if(shouldFetchPosts(getState(), reddit)) {
        return dispatch(fetchPosts(reddit))
    }
}


//加载器
export const changeLoading = (isLoading) => {
    return {
        type: 'START_LOADING',
        isLoading,
    }
}







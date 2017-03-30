//createAction

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
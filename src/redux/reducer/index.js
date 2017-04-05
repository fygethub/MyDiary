import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

/*const todoApp_ = (state = {}, action) => ({
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
})*/

export default todoApp;

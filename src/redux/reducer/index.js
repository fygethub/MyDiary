import { combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { selectedReddit, postsByReddit} from './reddit'

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    selectedReddit,
    postsByReddit
})

/*const todoApp_ = (state = {}, action) => ({
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
})*/

export default todoApp;

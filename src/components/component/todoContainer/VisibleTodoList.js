import { connect } from 'react-redux';
import { toggleTodo } from  '../../../redux/action'
import TodoList from '../todo/TodoList'

const getVisibleTodos = (todos, filter) => {
     switch (filter.toLowerCase()){
         case 'show_all':
             return todos;
         case 'show_completed':
             return todos.filter(t => t.completed);
         case 'show_Active':
             return todos.filter(t => !t.completed);
         default :
             return todos;
     }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)









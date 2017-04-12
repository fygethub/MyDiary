import { connect } from 'react-redux';
import { toggleTodo } from  '../../../redux/action'
import TodoList from '../todo/TodoList'

const getVisibleTodos = (todos, filter) => {

     switch (filter.toLowerCase()){
         case 'show_all':

             return todos;
         case 'show_computed':

             return todos.filter(t => t.completed);
         case 'show_active':

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

const mapDispatchToProps = {
    onTodoClick: toggleTodo
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList




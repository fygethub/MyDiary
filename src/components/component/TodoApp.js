import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../../redux/reducer'
import Footer from './todo/Footer'
import AddTodo from './todoContainer/AddTodo'
import VisibleTodoList from './todoContainer/VisibleTodoList'
let store = createStore(reducer);

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

store.subscribe(()=> {store.getState()});

const TodoApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

export default TodoApp;








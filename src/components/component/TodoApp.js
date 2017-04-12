import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../../redux/reducer'

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import Footer from './todo/Footer'
import AddTodo from './todoContainer/AddTodo'
import VisibleTodoList from './todoContainer/VisibleTodoList'
import { selectReddit, fetchPosts } from '../../redux/action'

const middleware = [ thunk ]
if(process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

let store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

store.dispatch(selectReddit('reactjs'))
store.dispatch(fetchPosts('reactjs')).then(() =>
    console.log(store.getState())
)

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








import React from 'react';
import { Provider } from 'react-redux';
import AddTodo from './addTodo';
import ListTodo from './listTodo';
import store from './store'

const App = () =>{
    return (
        <div className="App">
            <h1>Todo List</h1>
            <AddTodo />
            <ListTodo />
        </div>
    )
}

const Base =() => {
    return (
        <Provider store = {store}>
            <App />
        </Provider>
    )
}
export default Base;

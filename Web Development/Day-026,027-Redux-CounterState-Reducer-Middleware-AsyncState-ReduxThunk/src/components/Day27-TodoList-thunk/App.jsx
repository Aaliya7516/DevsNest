import React from 'react';
import AddTodo from './addTodo';
import ListTodo from './listTodo';

const App = () =>{
    return (
        <div className="App">
            <h1>Todo List</h1>
            <AddTodo />
            <ListTodo />
        </div>
    )
}

export default App;

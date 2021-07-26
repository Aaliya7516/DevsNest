## >> Introduction << 

>Function : Code in smaller chuncks, more optimized code, minimalistic <br>
>Class    : lot of memory

> code in class
```js
class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Narav";
        }
    }
    render() {
        return (
            <h1> { this.state.name } </h1>
        )
    }
}

export default Sample;
```

> code in function
```js
import React, { useState } from 'react';

function Sample(props) {
    const [state, setState] = useState("Narav");
    return (
        <h1> { state } </h1>
    )
}

export default Sample;
```
<br>

> function for passing props to function useState (predefined hook)

```js
import React, { useState } from "react";

const Hooks = (props) =>{
    const [state, setState] = useState(props.name);
    return (
        <div>
            <h1> { state } </h1>
            <button onClick={() => setState("Riya")}> Click me </button>
        </div>
    )
}

const PropPass = () => {
    return (
        <Hooks name="Ronn Weasley" />
    )
}

export default PropPass;
```

## Minimal Todo list using 'Hooks' 

<br>

```js
import React, { useCallback, useState } from "react";

const useArray = (initial) =>{
    const [val, setVal] = useState(initial);
    return {
        val,
        setVal,
        add: useCallback((a) => setVal((v) => [...v, a])),
        clear: useCallback(() => setVal(() => [])),
        removeById: useCallback((id) => 
            setVal((arr) => arr.filter((v) => v && v.id !== id))
        ),
        removeByIndex: useCallback((index) => {
            setVal((v) =>{
                v.splice(index, 1);
                v = [...v]
                return v;
            })
        }),
    };
};

const Todos = (props) => {
    const todos = useArray(['A', 'Bx', 'Cy Dz']);
    return (
        <div>
            <h3>Todos</h3>
            <button onClick={() => todos.add(Math.random())}>Add</button>
            <ul>
                {todos.val.map((todo, i) =>(
                    <li key={i} > {todo} 
                    <button onClick={()=> todos.removeByIndex(i)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={()=> todos.clear()}>Clear</button>
        </div>
    )
}

export default Todos;
```

## Toggle button using 'Hooks' 

<br>

```js
import { useCallback, useState } from 'react';

function App() {
    const [isTextChanged, setIsTextChanged] = useToggle();
    return (
        <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
    );
}

const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState(state => !state), []);
    return [state, toggle]
}

export default App;
```



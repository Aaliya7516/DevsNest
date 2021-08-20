React events => Search Synthetic events
> react: onClick - camel case <br>
> html : onclick - small letters

<b>*Read official document of React*</b>


<hr>

## >>>>> REACT WITHOUT HOOKS <<<<<

``` javascript
function App(props){
    let num = 0;
    return (
        <div className="App">
        <button onClick={()=>{
            num += 1;
            console.log(); <!-- 0,1,2,3,4,5... -->
        }}>
        {num} <!-- 0,0,0,0,0... -->
        </button>
        </div>
    );
}
```
> the above code will not update the value of num in DOM

## >>>>> REACT WITH HOOKS <<<<<

```javascript
function App(props){
    const state = useState(0);
    console.log(state); 
}
```
```
Output: Array : [undefined, f()] <- f is function
```
<br><br>

``` javascript
import React, { useState } from 'react';

function App(props){
    const [count, setCount] = useState(0);
    return (
        <div className="App">
        <button onClick={()=>{
            const newCount = count+1;
            setCount(newCount); <!-- note: we just passed the value to function -->
            console.log(count); <!-- 0,1,2,3,4,5... -->
        }}>
        {count} <!-- 0,1,2,3,4,5... -->
        </button>
        </div>
    );
}
```

> the above code will update the value of num in DOM as well

``` jsx
import React, { useState, useEffect } from 'react';

function App(props){
    const [count, setCount] = useState(0);
    const [count1, setCount] = useState(0);
    useEffect(()=>{
        console.log("DOM Updated");
    }, [count1]) // will console only when count1 is updated
    return (
        <div className="App">
        <button onClick={()=>{
            setCount(count+1);
        }}>
        {count} 
        </button>

        <button onClick={()=>{
            setCount(count1+1);
        }}>
        {count1} 
        </button>
        </div>
    );
}
```
> useEffect will render everytime count1 is updated here, by default, it is rendered everytime we update the DOM

> If we keep the array null, useEffect will only render while refreshing the page
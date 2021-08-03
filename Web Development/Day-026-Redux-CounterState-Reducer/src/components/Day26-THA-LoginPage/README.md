If we want to pass the data to the last child of a complex structure: <br>
> 1. Without context API, we need to pass the data from parent to child to their child and so on till we reach the destination.<br>
> 2. With context API, we will create a context to store data so that it can be accessed anywhere by any sub-child of the parent. <br>
> But the drawback is, it rerenders the whole page.<br>
> 3. In redux, the page will not re-render and we can use data in multiple places(childs).

## REDUX: A state management tool used in JS apps, that can be used along with react.

To use redux with react
```
npx create-react-app mini-project
npm install redux react-redux
```


## THA n Class :
Class: + - counter <br>
THA : https://devsnest.netlify.app/day26


## Counter with react setState

```js
import './App.css';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Counter using React Redux</h1>
      <button onClick={() => {setCount(count-1)}}> - </button>
      <span>{ count }</span>
      <button onClick={() => {setCount(count+1)}}> + </button>
    </div>
  );
}

export default App;
```
> The above code will work properly when we need it in single function, but if will need to pass the updated value to different childs, it will make code tarebally complex. Even if we will use context APIs... <br>
> Therefore, Redux came into picture. <br>

# >>> REDUX <<<

![reference image](https://res.cloudinary.com/practicaldev/image/fetch/s--V1XmAEPc--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://i.stack.imgur.com/LNQwH.png)
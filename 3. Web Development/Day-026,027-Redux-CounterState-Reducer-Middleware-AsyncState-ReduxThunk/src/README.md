## >>>>>>>> File Structure <<<<<<<<

actions folder mai index.js mai function define karke usme use hone wale types ko define kar dete hai

```js
const decNumber = () => {
    return {
        type: "DEC_NUMBER",
    };
};

export { incNumber }
```
<br>
ek reducer folder create karke usme sub reducer ke liye alag alag files bana sate hai and usko link karne ke liye ek index.js file

```js
import counterReducer from "./counterReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ counter: counterReducer });

export default rootReducer;
```

ab sub reducer files mai uske corresponding reducer ke liye ek function define karte hai, that's it.

```js
const counterReducer = (state = 0, action) => {
    if (action.type === "INC_NUMBER") { state += 1 }
    else if (action.type === "DEC_NUMBER") { state -= 1 }
    return state;
}

export default counterReducer;
```

<br>

ab ek store file create karte hai root mai, isme hum reducer ko store karne ke liye store create karte hai

```js
import rootReducer from "./reducers";
import { createStore } from "redux";

const store = createStore(rootReducer);
export default store;
```

<br>

ab finally App.jsx file mai hum reducers ka use karte hai

```js
// import { useState } from 'react';

import store from './store';
import { Provider } from 'react-redux';
import { incNumber, decNumber } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter using React Redux</h1>
      <button onClick={() => {dispatch(decNumber())}}> - </button>
      <span>{ count }</span>
      <button onClick={() => {dispatch(incNumber())}}> + </button>
    </div>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App;

```
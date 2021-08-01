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

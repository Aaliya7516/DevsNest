import store from './store';
import { Provider } from 'react-redux';
import { username, email } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Input</h1>
      <input type="text" onChange={(e) => {dispatch(username(e))}} /><br />
      <input type="text" onChange={(e) => {dispatch(email(e))}} /><br />
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

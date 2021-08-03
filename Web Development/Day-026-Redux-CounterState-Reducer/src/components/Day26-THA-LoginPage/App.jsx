import store from './store';
import { Provider } from 'react-redux';
import { username, email } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
  const inReducer = useSelector((state) => {console.log(state.inputReducer);
  return (
    state.inputReducer
  )});
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Input</h1>
      <input type="text" onChange={(e) => {dispatch(username(e))}} /><br />
      <input type="text" onChange={(e) => {dispatch(email(e))}} /><br />
    <div>
      <p>{inReducer.name} : {inReducer.email}</p>
    </div>
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

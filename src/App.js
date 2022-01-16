import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {incNumber,decNumber} from './action/index'
function App() {
  const myState=useSelector((state)=>state.changeTheNumber)
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>Increatement/Decreament Counter</h1>
      <h4>Using React Redux</h4>
      <div>{myState}</div>
      <button onClick={()=>dispatch(incNumber())}>+</button>
      <button onClick={()=>dispatch(decNumber())}>-</button>
    </div>
  );
}

export default App;

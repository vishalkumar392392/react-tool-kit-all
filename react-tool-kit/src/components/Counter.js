import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import {counterActions} from '../store/slices/counter-slice';


const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () =>{
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const incrementHandlerByNumber = () => {
    dispatch(counterActions.incrementByFive(5))  // => {type:"SOME_UNIQUE_INDENTIFER",payload:5}
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* {showCounter?<div className={classes.value}>{counter}</div>:null} */}
      {showCounter && <div className={classes.value}>{counter}</div>}
      
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementHandlerByNumber}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

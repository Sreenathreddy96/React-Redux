import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  let inputRef = useRef()
  let dispatch = useDispatch();
  let storeObj = useSelector((store)=>{
    return store;
  });
  return (
    <div className="App">
      <input ref={inputRef}></input>
      <button
      onClick={()=>{
        dispatch({type:"addActor",data:inputRef.current.value})
      }}>Actors</button>
      <button onClick={()=>{
        dispatch({type:"addCricketer",data:inputRef.current.value})
      }}>Cricketers</button>
      <button onClick={()=>{
        dispatch({type:"addPolitician",data:inputRef.current.value})
      }}>Politicians</button>
      <hr></hr>
      <h1>Actors:{storeObj.actors.join()}</h1>
      <h1>Cricketers:{storeObj.cricketers.join()}</h1>
      <h1>Politicians:{storeObj.politicians.join()}</h1>
    </div>
  );
}

export default App;

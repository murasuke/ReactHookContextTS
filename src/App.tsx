import React, { useReducer } from 'react';
import DeepChild from "./DeepChild";
import { countReducer, CountDispach, State } from "./countReducer";
import { isExpressionWithTypeArguments } from 'typescript';

function App() {
  const initialState = {
    count: 0
  }
  const [state, dispatch] = useReducer(countReducer, initialState ) ;
  return (
    <>
      <CountDispach.Provider value={{state, dispatch}}>
        <DeepChild />
      </CountDispach.Provider>
      <p>{state.count}</p>          
    </>
  );
}

export default App;

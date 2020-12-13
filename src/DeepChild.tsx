import React, { useContext } from "react";
import {CountDispach} from "./countReducer";

type ContextProps = [number, (args0: {type : string} ) => number];


const DeepChild : React.FC = () => {
    const { state, dispatch } = useContext(CountDispach) ;

    return(
        <>  
            <button onClick={() => dispatch({type:"increment"})} >
                increment {state.count}
            </button>
            <button onClick={() => dispatch({type:"decrement"})} >
                decrement {state.count}
            </button>
        </>
    );
}

export default DeepChild;
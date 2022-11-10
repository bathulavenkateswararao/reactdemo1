

import React,{useState,useEffect,useReducer} from "react";
const initialState = 0; 

    //reducer function
    function reducer(state, action) {
        //check the action and perform appropriate operations
        switch (action) {
            case 'increment':
                return state + 1; 
            case 'decrement':
                return state - 1; 
            default: 
                return state; 
        }
    }

    function Counter() {
        const [state, dispatch] = useReducer(reducer, initialState); 
        return (
        <>
            count: {state}
            {/*use the dispatch function to manipulate the state*/}
            <button onClick={() => dispatch('decrement')}> - </button>
            <button onClick={() => dispatch('increment')}> + </button>
        </>
        ); 
    }



    export default Counter
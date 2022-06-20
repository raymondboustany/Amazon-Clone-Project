//setting up a data layer
//we need this to track the basket

import React,{ createContext, useContext, useReducer } from "react";

export const StateContext = createContext();  // <= data layer

//building a provider
//children is the App that is inside the stateProvider we can see it in index.js
export const StateProvider =({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
    
    
)
//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);


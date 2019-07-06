import React, { useReducer, useEffect, Dispatch } from "react";
import reducer, { initalState, IState } from "./state/reducer";
import { IAction } from "./typescriptTypes/IAction";
import PublishMessage from './components/PublishMessage';

const App: React.FC = () => {
    const [ state, dispatch ]: [ IState, Dispatch<IAction> ] = useReducer(
        reducer, initalState );
    
    console.log( state );
    return (
        <div className='App'>
            <h2>Reation</h2>
            <hr/>
            <PublishMessage dispatch={ dispatch }/>
        </div>
    );
};

export default App;

import React, { useReducer, useEffect, Dispatch, useContext } from "react";
import reducer, { initalState, IState } from "./state/reducer";
import Context from './context';
import PublishMessage from './components/PublishMessage';
import MessageBoard from "./components/MessageBoard";


const App: React.FC = () => {
    const [ state, dispatch ] = useReducer( reducer, initalState );
    
    console.log( state );
    return (
        <Context.Provider value={ { state, dispatch } }>
            <h2>Reaction</h2>
            <hr/>
            <PublishMessage/>
            <MessageBoard/>
        </Context.Provider>
    );
};

export default App;

import React, { useState, Dispatch, KeyboardEvent, useContext, SetStateAction } from 'react';
import Context from '../context';
import { newMessage } from "../state/actions";
import { IAction } from "../typescriptTypes/IAction";

const PublishMessage: React.FC = () => {
    const {dispatch}: {dispatch: Dispatch<IAction>} = useContext(Context);
    const [ text, setText ]: [string, Dispatch<string>] = useState( '' );
    
    const publishMessage = () => {
        dispatch( newMessage( text ) );
        setText( "" );
    };
    
    const handleKeyPress = ( e: KeyboardEvent ) => {
        if ( e.key === "Enter" ) {
            publishMessage();
        }
    };
    
    return (
        <div>
            <h3>Got something to say?</h3>
            <input value={ text } onChange={ e => setText( e.target.value ) }
                   onKeyPress={ handleKeyPress }/>
            <button onClick={ publishMessage }>Publish it!</button>
        </div>
    );
};

export default PublishMessage;
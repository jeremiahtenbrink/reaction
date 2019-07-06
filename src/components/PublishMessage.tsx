import React, { useState, Dispatch, KeyboardEvent } from 'react';
import { newMessage } from "../state/actions";
import { IAction } from "../typescriptTypes/IAction";

interface IProps {
    dispatch: Dispatch<IAction>
}

const PublishMessage: React.FC<IProps> = ( props ) => {
    const { dispatch } = props;
    const [ text, setText ] = useState( '' );
    
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
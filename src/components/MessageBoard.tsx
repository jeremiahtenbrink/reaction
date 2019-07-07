import React, { useContext } from 'react';
import Context from '../context';
import { IMessage } from "../typescriptTypes/IMessage";
import { IState } from "../state/reducer";

const MessageBoard: React.FC = () => {
    const { state }: { state: IState } = useContext( Context );
    return (
        <div>
            { state.messages.map( ( message: IMessage ) => {
                const { id, text, timestamp } = message;
                return (
                    <div key={ id }>
                        <h4>{ new Date( timestamp ).toLocaleString() }</h4>
                        <p>{ text }</p>
                        <hr/>
                    </div>
                )
            } ) }
        </div>
    );
};

export default MessageBoard;
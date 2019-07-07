import { IAction } from "../typescriptTypes/IAction";
import { IMessage } from "../typescriptTypes/IMessage";
import { Reducer } from "react";

export interface IState {
    messages: IMessage[];
}

export const initalState: IState = {
    messages: [],
};

const reducer: Reducer<IState, IAction> = ( state: IState,
                                            action: IAction ): IState => {
    switch ( action.type ) {
        case "NEW_MESSAGE":
            return {
                ...state, messages: [ ...state.messages, action.payload ]
            };
        default:
            return state;
    }
};

export default reducer;

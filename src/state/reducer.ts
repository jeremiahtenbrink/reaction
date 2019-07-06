import { IAction } from "../typescriptTypes/IAction";
import { IMessage } from "../typescriptTypes/IMessage";

export interface IState {
  messages: IMessage[];
}

export const initalState = {
  messages: [],
};

const reducer = (state: IState = initalState, action: IAction):IState => {
  switch (action.type) {
    case "NEW_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};

export default reducer;

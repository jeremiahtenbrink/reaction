import { createContext, Dispatch, useReducer } from "react";
import reducer, { initalState, IState } from "./state/reducer";
import { IAction } from "./typescriptTypes/IAction";

interface IContext {
    state: IState,
    dispatch: Dispatch<IAction>
}

// @ts-ignore
export default createContext();
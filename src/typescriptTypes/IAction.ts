export interface IAction {
  type: type;
  payload: any;
}

type type = "NEW_MESSAGE";

export const NEW_MESSAGE = "NEW_MESSAGE";
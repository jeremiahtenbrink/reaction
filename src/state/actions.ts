import { NEW_MESSAGE } from "../typescriptTypes/IAction";
import uuid from "uuid/v4";
import { IAction } from "../typescriptTypes/IAction";

export const newMessage = ( text: string ): IAction => ( {
    type: NEW_MESSAGE,
    payload: { id: uuid(), text, timestamp: Date.now() },
} );

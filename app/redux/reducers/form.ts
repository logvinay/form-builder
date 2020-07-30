import { IFormData } from "../../models/IFormData";
import { IAction } from "../../models/IAction";

const form = (state: IFormData = {}, action: IAction) => {
    switch (action.type) {
        case "INIT_STATE":
            return {...action.payload};
        default:
           return state;
    }
}

export {form};
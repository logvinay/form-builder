import { IFormData } from "../../models/IFormData";
import { IAction } from "../../models/IAction";

const form = (state: IFormData = {}, action: IAction) => {
    switch (action.type) {
        case "INIT_STATE":
            return {...action.payload};
        case "CONTROL_CHANGE": {
            state.value[action.payload.property] = action.payload.value
            return {...state};
        }
        case "CONTROL_BLUR": {
            state.value[action.payload.property] = action.payload.value
            return {...state};
        }
        case "CONTROL_INPUT": {
            state.value[action.payload.property] = action.payload.value
            return {...state};
        }
        case "FORM_SAVE" : {
            return {...state};
        }
        case "FORM_VALIDATE": {
            return {...state};
        }
        default:
           return state;
    }
}

export {form};
import { IFormData } from "../../models/IFormData";
import { IAction } from "../../models/IAction";

const form = (state: IFormData = {}, action: IAction) => {
    function setValue(prop: any, value: any) {
        if (!state.value) {
            state.value = {};
        }  
        state.value[prop] = value;
        if (!state.value[prop]) {
            delete state.value[prop];
        }
    }
    console.log("Previous Value", state.value);
    switch (action.type) {
        case "INIT_STATE":
            state = {...action.payload};
        case "CONTROL_CHANGE": {
            // setValue(action.payload.property, action.payload.value);
            break;
        }
        case "CONTROL_BLUR": {
            setValue(action.payload.property, action.payload.value);
            break;
        }
        case "CONTROL_INPUT": {
            // if (!state.value) {
            //     state.value = {};
            // }
            // state.value[action.payload.property] = action.payload.value
            // return {...state};
        }
        case "FORM_SAVE" : {
            break;
        }
        case "FORM_VALIDATE": {
            break;
        }
        default:
           break;
    }
    ((window as any).state) = state;
    return {...state};
}

export {form};
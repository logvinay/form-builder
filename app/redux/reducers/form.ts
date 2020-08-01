import { IFormData } from "../../models/IFormData";
import { IAction } from "../../models/IAction";
import { IValue } from "../../models/IFormData";

const form = (state: IFormData = {}, action: IAction) => {

    function setValue(prop: any, data: any, isValue: boolean) {
        if (!state.value) {
            state.value = {};
        }
        if (!state.value[prop]) {
            state.value[prop] = {} as any;
        }
        var stateValue: IValue = state.value[prop];
        if (isValue) {
            stateValue.value = data;
        }
        else {
            stateValue.hasError = data;
        }       
        if (!stateValue.value && !stateValue.hasError) {
            delete state.value[prop];
        }
    }

    switch (action.type) {
        case "INIT_STATE":
            state = { ...action.payload };
            break;
        case "CONTROL_BLUR":
        case "CONTROL_CHANGE": {
            const {property, value} = action.payload;
            setValue(property, value, true);
            break;
        }

        case "CONTROL_VALIDATE": {
            const {property, hasError} = action.payload;
            setValue(property, hasError, false);
            break;       
        }
        case "CONTROL_INPUT": {
            break;
        }
        case "FORM_SAVE": {
            break;
        }
        case "FORM_VALIDATE": {
            const {property, hasError} = action.payload;
            setValue(property, hasError, false);
            break;
        }
        default:
            break;
    }
    (window as any).formbuilder = {state};
    return { ...state };
}

export { form };
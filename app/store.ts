// name of property
/*
type | rendertype | resultType
string --> Textbox --> string
whole --> Numberbox --> int
decimal --> Numberbox --> decimal
options --> Dropdown --> string | object with look for subtype
boolean --> toggle --> boolean
object --> Array[Components] --> object will look for subtype


*/
export interface IProperty {
    name: string;
    isRequired: boolean;
    type: "string" | "whole" | "decimal" | "options" | "boolean" | "object";
    subtype: IProperty[] | { [key: string]: IProperty | IProperty[] } | string[] | number[] | null | undefined;
}

export interface IFormData {
    properties: IProperty[]
    value: { [property: string]: any };
    onSave: (value: any) => void;
    onBlur: (prop: string, value: string, state: any) => void;
    onChange: (prop: string, value: string, state: any) => void;
    onFocus: (prop: string, value: string, state: any) => void;
    onError: (prop: string, value: string, state: any) => void;
}

export interface IAction {
    type: "SAVE" | "ONBLUR" | "ONCHANGE" | "ONERROR",
    prop: string;
    value: string;
    event: Event;
}

export function store(state: IFormData, action: IAction) {
    switch (action.type) {
        case "SAVE":
            state.onSave && state.onSave(state.value);
            return { ...state };

        case "ONCHANGE":
        case "ONBLUR":
            state.value = { ...state.value, [action.prop]: action.value };
            action.type == "ONBLUR" && state.onBlur && state.onBlur(action.prop, action.value, state);
            action.type == "ONCHANGE" && state.onChange && state.onChange(action.prop, action.value, state);
            return { ...state };

        case "ONERROR":
            state.onError && state.onError(action.prop, action.value, state);
            return state;
        default:
            break;
    }
}
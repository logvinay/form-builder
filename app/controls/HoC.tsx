import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IFormData, IPropMetadata, ILocalization } from "../models/IFormData";
import { Controls } from "./Controls";

export interface IReduxState {
    localization?: ILocalization
}

export interface IControlProps extends IReduxState {    
    property: IPropMetadata,
}

function Contol({property, localization}: IControlProps) {
    return <div>
        <label>
            {localization.strings[property.name]}
        </label>
        <div>
            {React.createElement(Controls.instance.getControl(property.type), property)}
        </div>
    </div>
}

const mapStateWithProps = (state: { form: IFormData }) => {
    return {
        state: state.form
    };
}

const mapDispatchWithProps = (dispatch: Dispatch) => {
    return {
        onBlur: (value: any) => dispatch({ type: "INPUT_BLUR" }),
        onChange: (value: any) => dispatch({ type: "INPUT_CHANGE" }),
        onInput: (value: any) => dispatch({ type: "INPUT_CONTROL" })
    }
}

const HOC = connect(mapStateWithProps, mapDispatchWithProps)(Contol);

export { HOC };
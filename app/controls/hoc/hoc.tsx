import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IFormData, IPropMetadata, ILocalization } from "../../models/IFormData";
import { Controls, getId } from "../utils";

export interface IReduxState {
    localization?: ILocalization,
    onChange?: (property: any, event: Event) => void;
    onInput?: (property: any, event: Event) => void;
    onBlur?: (property: any, event: Event) => void;
}

export interface IControlProps extends IReduxState {
    property: IPropMetadata,
    value: any;
}

function Control(props: IControlProps) {
    return <div>
        <label id={getId(props.property.name)}>
            {props?.localization?.strings?.[props.property.name] || props.property.name}
        </label>
        {React.createElement(Controls.instance.getControl(props.property.type), props)}
    </div>
}

const onChange = (property: any, event: Event, dispatch: Dispatch) => {
    let value = (event.target as any).value;
    dispatch({
        type: "CONTROL_CHANGE",
        payload: {property, value}
    });
}

const onBlur = (property: any, event: Event, dispatch: Dispatch) => {
    let value = (event.target as any).value;
    dispatch({
        type: "CONTROL_BLUR",
        payload: {property, value}
    });
}

const onInput = (property: any, event: Event, dispatch: Dispatch) => {
    let value = (event.target as any).value;
    dispatch({
        type: "CONTROL_INPUT",
        payload: {property, value}
    });
}

const mapStateWithProps = (state: { form: IFormData }) => {
    return {
        localization: state.form.currentLocalization
    };
}

const mapDispatchWithProps = (dispatch: Dispatch) => {
    return {
        onBlur: (property: any, event: any) => onBlur(property, event, dispatch),
        onChange: (property: any, event: any) => onChange(property, event, dispatch),
        onInput: (property: any, event: any) => onInput(property, event, dispatch)
    }
}

const HOC = connect(mapStateWithProps, mapDispatchWithProps)(Control);

export { HOC };
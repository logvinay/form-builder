import * as  React from "react";
import { IPropMetadata, ILocalization } from "../../models/IFormData";
import { getId } from "../utils";

interface IInputProps {
    property: IPropMetadata,
    localization: ILocalization,
    onChange?: (property: any, event: Event) => void;
    onInput?: (property: any, event: Event) => void;
    onBlur?: (property: any, event: Event) => void;
    value?: any;
}

export function Input(props: IInputProps) {
    return <div>
        <input
        aria-labelledby={getId(props.property.name)}
        id={props.property.name}
        disabled={props.property.disabled}
        type="text"
        value={props.value}
        onChange={(event: any) => {props.onChange(props.property.name, event)}}
        onBlur={(event: any) => {props.onBlur(props.property.name, event)}}
        onInput = {(event: any) => {props.onInput(props.property.name, event)}} />
    </div>;
}
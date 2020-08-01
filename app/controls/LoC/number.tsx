import * as  React from "react";
import { IPropMetadata, ILocalization } from "../../models/IFormData";
import { getId, Controls } from "../utils";

interface INumberProps {
    property: IPropMetadata,
    localization: ILocalization,
    onChange?: (property: any, event: Event) => void;
    onInput?: (property: any, event: Event) => void;
    onBlur?: (property: any, event: Event) => void;
    value?: any;
}

export function Number(props: INumberProps) {
    const onBlurAndChange = (event: any) => {
        var value = 0;
        if (props.property.type == "int") {
            value = parseInt(event.target.value);
        }
        else if (props.property.type == "decimal") {
            value = parseFloat(event.target.value);
        }
        props.onChange(props.property.name, value as any);
    }
    return <div>
        <input
            aria-labelledby={getId(props.property.name)}
            required={props.property.required}
            id={props.property.name}
            disabled={props.property.disabled}
            type="number"
            value={props.value || ""}
            onChange={onBlurAndChange}               
            onBlur={onBlurAndChange}
        />
    </div>;
}
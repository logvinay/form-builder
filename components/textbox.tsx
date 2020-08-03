import * as React from "react";

export interface ITextbox {
    label?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    hasError?: boolean;
    errorMessage?: string;
    style?: "ordinary" | "modern" | "updown";
}

export function Textbox(props: ITextbox) {
    var style = {};
    style = { ...style, ...{ width: "100%" } };
    return <div>
        <label>
            {props.label}
        </label>
        <input
            style={style}
            aria-label={props.label}
            type="text"
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value || ""}
        />
    </div>;
}
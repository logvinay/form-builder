import ReactDOM from "react-dom";
import React from "react";
import {Form, IFormProps} from "./form";

export class FormRenderer {
    private _element: HTMLElement;
    constructor(props: any) {
        this._element = document.getElementById(props.id);
    }
    render() {
        ReactDOM.render(<Form />, this._element);
    }
}
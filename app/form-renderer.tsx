import {render} from "react-dom";
import * as React from "react";
import {Form} from "./form";

export class FormRenderer {
    private _element: HTMLElement;
    private _props: any;
    constructor(props: any) {
        this._props = props;
        this._element = document.getElementById(this._props.id);
    }
    render() {
        render(<Form {...this._props} />, this._element);
    }
}
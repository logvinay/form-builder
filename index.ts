import * as React from "react";
import * as ReactDOM from "react-dom";
import { Page } from "./Page";

export class Index {
    private _element: HTMLElement;
    constructor() {
        this._element = document.getElementById("app");
    }
    render() {
        ReactDOM.render(React.createElement(Page, {}), this._element);
    }
}
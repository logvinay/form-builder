import { render } from "react-dom";
import * as React from "react";
import { Form } from "./form";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export class FormRenderer {
    private _element: HTMLElement;
    private _props: any;
    constructor(props: any) {
        this._props = props;
        this._element = document.getElementById(this._props.id);
        this.init();
    }
    registerAllComponents() {

    }
    init() {
        store.dispatch({ type: "INIT_STATE", payload: this._props.formData });
        this.registerAllComponents();
    }

    render() {
        render(
            <Provider store={store}>
                <Form />
            </Provider>
            , this._element);
    }
}
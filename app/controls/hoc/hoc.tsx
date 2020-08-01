import * as React from "react";
import { connect } from "react-redux";
import {Dispatch} from "redux";
import { IFormData } from "formbuilderzero/app/models/IFormData";
import { ILocalization } from "../../models/IFormData";

export interface IReduxControlState {
    localization: ILocalization
}

export interface IControlSpecificProps {

}

export interface IControlProps extends IControlSpecificProps, IReduxControlState {

}

export const Control = (props: IControlProps) => {
    return <div>

    </div>
}

const mapStateWithProps = (state: IFormData, props: IControlSpecificProps) => {

}

const mapDispatchWithProps = (dispatch: Dispatch, props: IControlSpecificProps) => {

}

export const HOC = connect(mapStateWithProps, mapDispatchWithProps)(Control);
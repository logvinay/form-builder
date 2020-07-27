import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IFormData } from "./models/IFormData";


function ReactForm({ state, dispatch }: any) {
  return (
    <div>
    </div>
  );
}

const mapStateWithProps = (state: IFormData) => {
  
}

const mapDispatchWithProps = (dispatch: Dispatch) => {

}

const Form = connect(mapStateWithProps, mapDispatchWithProps)(ReactForm);

export { Form };
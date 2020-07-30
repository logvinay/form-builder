import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IFormData } from "./models/IFormData";
import { HOC } from "./controls/HoC";

export interface IReduxFormProps {
  form?: IFormData;
  onSave: () => void;
  onValidate: (success?: () => void, error?: () => void) => void;
}

export interface IReactFormProps extends IReduxFormProps {

}

function ReactForm(props: IReactFormProps) {
  const { form, onSave, onValidate } = props;
  return (
    <div className="form">
      {
        props.form.properties.map((property, index) => {
          <HOC key={property.name + index} property={property} />
        })
      }
      <div>
        Save
      </div>
    </div>
  );
}

const mapStateWithProps = (state: { form: IFormData }) => {
  return {
    state: state.form
  };
}

const mapDispatchWithProps = (dispatch: Dispatch) => {
  return {
    onSave: () => dispatch({ type: "FORM_SAVE" }),
    onValidate: () => dispatch({ type: "FORM_VALIDATE" }),
  }
}

const Form = connect(mapStateWithProps, mapDispatchWithProps)(ReactForm);

export { Form };
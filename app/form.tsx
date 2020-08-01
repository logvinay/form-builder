import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IFormData } from "./models/IFormData";
import { Control } from "./controls/hoc";

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
        form.properties.map((property, index) => {
          const value = form && form.value && form.value[property.name] && form.value[property.name].value;
          return <Control key={property.name + index} property={property} value={value} />
        })
      }
      <button>Save</button>
    </div>
  );
}

const mapStateWithProps = (state: { form: IFormData }) => {
  return {
    form: state.form
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
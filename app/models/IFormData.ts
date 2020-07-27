export interface IArray {
    typeName: "array",
    type: "string" | "int" | "decimal" | "boolean" | "complex"
    complexType: IArray | IModel
}

export interface IModel {
    [name: string] : IValueMetaData
}

export interface IValueMetaData {
    displayName: string; // control will be labelled based this property
    type: "string" | "int" | "decimal" | "boolean" | "complex",
    complexType: IArray | IModel
}

export interface IFormData {
    properties: {[name: string]: IValueMetaData}
    value: {[name: string]: any}
}
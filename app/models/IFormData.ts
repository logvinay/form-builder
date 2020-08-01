export interface IArray {
    typeName: "array",
    type: "string" | "int" | "decimal" | "boolean" | "complex"
    complexType: IArray | IDictionary
}

export interface IDictionary {
    [name: string] : IPropMetadata
}

export interface IPropMetadata {
    validate: boolean, // Whether to validate
    validators: {[name: string]: any}
    validateContent: string, // Pattern in of regexp
    errorcode: string, // will be key of localized string
    name: string; // primary property and will be key of Display name on localized string
    disabled: boolean; // whether field is disabled
    required: boolean; // whether field is required (required code is loc-required)
    type: "string" | "int" | "decimal" | "boolean" | "complex", // type of control to render
    complexType: IArray | IDictionary // if type complex selected then must to select subtype
}

export interface ILocalization {
    languageId: string,
    strings: {[key: string]: string}
}

export interface IValidation {
    validator: "regexp"
}

export interface IFormData {
    currentLocale?: string;
    currentLocalization?: ILocalization
    localizations?: ILocalization[]
    properties?: IPropMetadata[];
    value?: {[name: string]: IValue};
}

export interface IValue {
    hasError: boolean;
    value: any
}
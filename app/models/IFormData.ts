export interface IArray {
    typeName: "array",
    type: "string" | "int" | "decimal" | "boolean" | "complex"
    complexType: IArray | IDictionary
}

export interface IDictionary {
    [name: string] : IPropMetadata
}

export interface IPropMetadata {
    name: string;
    disabled: boolean;
    required: boolean;
    type: "string" | "int" | "decimal" | "boolean" | "complex",
    complexType: IArray | IDictionary
}

export interface ILocalization {
    languageId: string,
    strings: {[key: string]: string}
}

export interface IFormData {
    currentLocale?: string;
    currentLocalization?: ILocalization
    localizations?: ILocalization[]
    properties?: IPropMetadata[];
    value?: {[name: string]: any}
}
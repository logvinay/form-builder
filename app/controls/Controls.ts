export class Controls {
    private _registeredControls: {[type: string]: any};
    private static _instance: Controls;

    public static get instance() {
        if (!this._instance) {
          this._instance = new Controls;
        }
        return this._instance;
    }

    public getControl(type: string): any {
       return this._registeredControls[type];
    }

    constructor() {
      this._registeredControls = {};
    }

    public register(type: string, control: any) {
      this._registeredControls[type] = control;
    }

    public unRegister(type: string) {
       delete this._registeredControls[type];
    }
}
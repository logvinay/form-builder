import * as React from "react";
import * as ReactDOM from "react-dom";
import { Textbox } from "./components";

export function Page() {
    const [name, setName] = React.useState("");
    return <div>
        <Textbox
            label="Name"
            onChange={(event) => { setName(event.target.value) }}
            onBlur={(event) => { setName(event.target.value) }}
            hasError={false}
            value={name}
            style={"ordinary"}
        />
    </div>
}
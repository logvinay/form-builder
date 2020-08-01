var index = new formbuilderzero.FormRenderer({id: "app", formData: {
    properties: [
        {name: "name", type: "text", required: true},
        {name: "age", type: "int", required: true},
        {name: "age1", type: "decimal", required: true},
        {name: "sex", type: "text", required: true},
        {name: "good", type: "text"}
    ],
    value: {
        "name" : {
            value : "Vinay"
        },
        "age": {
            value: 24
        },
        "sex": {
            value: "male"
        },
        "good": {
            value: "bed"
        }  
    }
}});
index.render();
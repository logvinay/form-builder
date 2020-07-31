var index = new formbuilderzero.FormRenderer({id: "app", formData: {
    properties: [
        {name: "name", type: "text", required: true},
        {name: "age", type: "text", required: true},
        {name: "data", type: "text", required: true},
        {name: "malt", type: "text"}
    ]
}});
index.render();
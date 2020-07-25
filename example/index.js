const { Index } = require("../package/formbuilderzero")

window.onload((event) => {
    var index = new Index({id: "app"});
    index.render();
})
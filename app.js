const urlStatus = require("./lib/index");
const fnc =  async () => {
    console.log(await urlStatus("https://google.com/"))
}
fnc();
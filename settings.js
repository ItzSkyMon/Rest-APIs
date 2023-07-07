const fs = require("fs");

global.creator = "KeiLa";
global.apikey = ["KeiLa1", "KeiLa2", "KeiLa3"];

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(`Update'${__filename}'`);
	delete require.cache[file];
	require(file);
});

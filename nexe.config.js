const {	compile } = require("nexe");
const fs = require("fs");

fs.readdirSync("./src/utils/").forEach((file) => {
	compile({
		input: "./src/utils/" + file,
		output: "./utils/" + file.split('.')[0] + "-win.exe",
		target: "windows-x64-12.9.1"
	}).then(() => {
		console.log("[windows-x64] " + file + " builded successfully.");
		compile({
			input: "./src/utils/" + file,
			output: "./utils/" + file.split('.')[0] + "-linux",
			target: "linux-x64-12.9.1"
		}).then(() => {
			console.log("[linux-x64] " + file + " builded successfully.");
			compile({
				input: "./src/utils/" + file,
				output: "./utils/" + file.split('.')[0] + "-mac",
				target: "mac-x64-12.9.1"
			}).then(() => {
				console.log("[mac-x64] " + file + " builded successfully.");
			});
		});
	});
});
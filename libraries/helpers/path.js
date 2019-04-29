const fs = require("fs");
const path = require("path");

const checkIfExist = (_path, _what) => {
	if (! fs.existsSync(_path)) {
		console.log("\n?".green, "Error".red);
		console.log('--------------------------------------------------------------------'.boldWhite);
		console.log("?".green, `${_what} does not exists...! Please check the docs.`.green);
		process.exit(1);
	}
};

const npm = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "node_modules");
	checkIfExist(_path, "node_modules");

	return _path;
};
	
const wdio = () => {
	const _path = `${npm()}/.bin/wdio`;
	checkIfExist(_path, "WebDriverIO");
	return _path;
};

const gecko = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/gecko.conf.js");;
	checkIfExist(_path, "Gecko's conf");

	return _path;
};

const chrome = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/chrome.conf.js");;
	checkIfExist(_path, "Chrome's conf");
	
	return _path;
};

const geckoHeadless = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/gecko-headless.conf.js");;
	checkIfExist(_path, "Headless Gecko's conf");
	
	return _path;
};

const chromeHeadless = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/chrome-headless.conf.js");;
	checkIfExist(_path, "Headless Chrome's conf");
	
	return _path;
};

const browserStack = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/browser-stack.conf.js");
	checkIfExist(_path, "Browser-Stack's conf");
	
	return _path;
};

const browserStackLocal = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/local.conf.js");
	checkIfExist(_path, "Browser-Stack Local's conf");
	
	return _path;
}

module.exports = {
	checkIfExist,
	npm,
	wdio,
	chromePath: chrome,
	geckoPath: gecko,
	chromeHeadlessPath: chromeHeadless,
	geckoHeadlessPath: geckoHeadless,
	browserStackPath: browserStack,
	browserStackLocalPath: browserStackLocal
};
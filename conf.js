exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['./Tests/*_test.js'],
	capabilities: {
		browserName: 'chrome'
	},
	jasmineNodeOpts: {
    	defaultTimeoutInterval: 10000
	},
	onPrepare: async function () {
    	browser.manage().window().maximize();
    	browser.manage().timeouts().implicitlyWait(5000);
    	await browser.waitForAngularEnabled(false);
	}
}

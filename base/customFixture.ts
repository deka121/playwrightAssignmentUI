import { chromium, test as baseTest } from "@playwright/test";


import path from "path"
import SPHomePage from "../pages/SPHomePage";
import SPSliderPage from "../pages/SPSliderPage";
import SPInputFormPage from "../pages/SPInputFormPage";

type pages = {
    sphomePage: SPHomePage;
    spsliderpage: SPSliderPage;
    spinputformpage:SPInputFormPage;

}

const capabilities = {
    browserName: "Chrome", 
    browserVersion: "latest",
    "LT:Options": {
        platform: "Windows 10",
        build: "Playwright Test Build",
        name: "Playwright Test",
        user: 'your_lambda_test_username',
        accessKey: 'your_lambda_test_access_key',
        network: true,
        video: true,
        console: true,
        tunnel: false,
        tunnelName: "", 
        geoLocation: '', 
    },
};


const modifyCapabilities = (configName, testName) => {
    let config = configName.split("@lambdatest")[0];
    let [browserName, browserVersion, platform] = config.split(":");
    capabilities.browserName = browserName
        ? browserName
        : capabilities.browserName;
    capabilities.browserVersion = browserVersion
        ? browserVersion
        : capabilities.browserVersion;
    capabilities["LT:Options"]["platform"] = platform
        ? platform
        : capabilities["LT:Options"]["platform"];
    capabilities["LT:Options"]["name"] = testName;
};

const getErrorMessage = (obj, keys) =>
    keys.reduce(
        (obj, key) => (typeof obj == "object" ? obj[key] : undefined),
        obj
    );

const testPages = baseTest.extend<pages>({
    page: async ({ }, use, testInfo) => {
        let fileName = testInfo.file.split(path.sep).pop();
        if (testInfo.project.name.match(/lambdatest/)) {
            modifyCapabilities(
                testInfo.project.name,
                `${testInfo.title} - ${fileName}`
            );
            const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=
        ${encodeURIComponent(JSON.stringify(capabilities))}`);
            const context = await browser.newContext(testInfo.project.use);
            const ltPage = await context.newPage()
            await use(ltPage);
            const testStatus = {
                action: "setTestStatus",
                arguments: {
                    status: testInfo.status,
                    remark: getErrorMessage(testInfo, ["error", "message"]),
                },
            };
            await ltPage.evaluate(() => { },
                `lambdatest_action: ${JSON.stringify(testStatus)}`);
            await ltPage.close();
            await context.close();
            await browser.close();
        } else {
            const browser = await chromium.launch();
            const context = await browser.newContext();
            const page = await context.newPage()
            await use(page);
        }
    },

    sphomePage: async ({ page }, use) => {
        await use(new SPHomePage(page));
    },
    spsliderpage: async ({ page }, use) => {
        await use(new SPSliderPage(page));
    },
    spinputformpage: async ({ page }, use) => {
        await use(new SPInputFormPage(page));
    },

})

export const test = testPages;
export const expect = testPages.expect;
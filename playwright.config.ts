import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    projects: [
        {
            name: "chrome:latest:MacOS Catalina@lambdatest",
            use: {
                viewport: { width: 1920, height: 1080 },
            },
        },
        {
            name: "MicrosoftEdge:latest:Windows 10@lambdatest",
            use: {
                viewport: { width: 1280, height: 720 },
            },
        },
        // {
        //     name: "chrome",
        //     use: {
        //         ...devices["Desktop Chrome"]
        //     }
        // },
        // {
        //     name: "firefox",
        //     use: {
        //         ...devices["Desktop Firefox"]
        //     }
        // }
    ],

    testMatch: ["tests/SimpleFormDemo.test.ts","tests/ProgressBars&Sliders.test.ts","tests/InputForms.test.ts"],
    use: {
             baseURL: "https://www.lambdatest.com/selenium-playground",
        headless: false,
        screenshot: "on",
        video: "on",
        //recordLogs: 'on',
        //network: 'record'
        launchOptions: {
        //slowMo: 1000
        },
    },
    timeout: 60 * 1000 * 5,
    retries: 0,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
        open: "never"
    }]]
};

export default config;

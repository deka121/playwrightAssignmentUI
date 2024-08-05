# Assignment Task: Playwright 101

## Introduction
This project demonstrates to automate web testing scenarios using Playwright in TypeScript. It includes three test scenarios targeting LambdaTest's Selenium Playground, showcasing abilities to interact with forms, sliders and submit actions within a web application. By employing the Page Object Model (POM), we enhance test script maintainability and readability. The tests are designed to run in parallel on multiple browser/OS(chrome,MicrosoftEdge-MacOS Catalina,Windows 10) combinations via the LambdaTest platform, ensuring broad compatibility and functionality verification.

## Prerequisites
Before setting up the project, ensure you have the following installed on your system:

Node.js (v14.x or later)
npm (v6.x or later)
A LambdaTest account (for accessing multiple browsers/OS combinations)
Additional requirements, such as browser versions and operating systems, will be managed through the LambdaTest platform.

## Installation
1.Clone the Repository
# git clone https://github.com/deka121/playwrights_101_assignment


2.Install Dependencies
Using npm: 
```bash
npm install
```
3.Configure LambdaTest Credentials [please add this in customFixture.ts file]
LT_USERNAME=your_lambda_test_username
LT_ACCESS_KEY=your_lambda_test_access_key

4.Run Tests
To execute the tests on LambdaTest, use the following command, ensuring you've configured your Playwright scripts to connect with LambdaTest's Selenium Grid:
```bash
npm test
```
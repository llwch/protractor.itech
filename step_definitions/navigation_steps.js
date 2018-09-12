let { Given, When, Then, setDefaultTimeout } = require('cucumber');
let pageFactory = require('../support/page_factory');
let MainPage = require('../support/main.page');
let LoginPage = require('../support/login.page');
let DashboardPage = require('../support/dashboard.page');
let expect = require('chai').expect;
let assert = require('assert');

    setDefaultTimeout(18000);

    Given(/^I am on the '(.+)'$/, async function(pageName){
        await pageFactory.getPage(pageName).goToPage();
        let actualUrl = await pageFactory.currentPage.getUrl();
        let expectedUrl = pageFactory.currentPage.url;
        expect(actualUrl).to.include(expectedUrl);
    });
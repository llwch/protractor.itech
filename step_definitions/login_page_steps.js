let {Then, When} = require('cucumber');
let pageFactory = require('../support/page_factory');
let MainPage = require('../support/main.page');
let LoginPage = require('../support/login.page');
let DashboardPage = require('../support/dashboard.page');
let expect = require('chai').expect;
let assert = require('assert');

    When(/^I login to the application$/, async function(){
        await pageFactory.getPage('login page').login();
        let actualUrl = await pageFactory.getPage('dashboard').getUrl();
        let expectedUrl = pageFactory.currentPage.url;
        expect(actualUrl).to.include(expectedUrl);
    });
//let cucumber = require('cucumber');
let {Then} = require('cucumber');
let pageFactory = require('../support/page_factory');
let MainPage = require('../support/main.page');
let LoginPage = require('../support/login.page');
let DashboardPage = require('../support/dashboard.page');
let expect = require('chai').expect;
let assert = require('assert');

    Then(/^Element '(.+)' should be displayed$/, async function(elementName){
        let state = await pageFactory.currentPage.isElementVisible(elementName);
        expect(state).to.equal(true);
    });


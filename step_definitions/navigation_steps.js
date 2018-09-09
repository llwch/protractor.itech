let cucumber = require('cucumber');
let pageFactory = require('../support/page_factory');
let expect = require('chai').expect;
cucumber.defineSupportCode(function({Given, When, Then, setDefaultTimeout}) {

    setDefaultTimeout(18000);

    Given(/^I am on the '(.+)'$/, async function(pageName){
        await pageFactory.getPage(pageName).goToPage();
        let actualUrl = await pageFactory.currentPage.getUrl();
        let expectedUrl = pageFactory.currentPage.url;
        expect(actualUrl).to.include(expectedUrl);
    });
});
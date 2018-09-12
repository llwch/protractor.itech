let {Then} = require('cucumber');
let MainPage = require('../support/main.page');
let LoginPage = require('../support/login.page');
let DashboardPage = require('../support/dashboard.page');
let pageFactory = require('../support/page_factory');
//let MainPage = new MainPage();
let expect = require('chai').expect;
let assert = require('assert');

Then(/^I should verify title name$/, async function() {
    expect(browser.getTitle()).toEqual('Hire Freelancers & Find Freelance Jobs Online - Freelancer');
});

Then(/^I should open login modal$/, async function(){
    await mainPage.openLoginform();
    await browser.refresh();
    expect(browser.getCurrentUrl()).toEqual("https://www.freelancer.com/login");
});
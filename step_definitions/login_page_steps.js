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

    Then(/^I should check validation error for username$/, async function(){
        await mainPage.openLoginform();
        await browser.refresh();
        await loginField.sendKeys('abyss.itechgmail.com');
        await browser.sleep(10000);
        expect(usernameError.getText()).toEqual('Please enter a valid username or email address.');
    });

    Then(/^I should check validation error for empty password$/, async function(){
        await mainPage.openLoginform();
        await browser.refresh();
        await loginField.sendKeys('abyss.itech@gmail.com');
        await passwordField.sendKeys('');
        await browser.sleep(1000);
        await loginButton.click();
        expect(passwordError.getText()).toEqual('Please enter your password.');
    });

    Then(/^I should login to app$/, async function() {
        await mainPage.openLoginform();
        await browser.refresh();
        await loginField.sendKeys('abyss.itech@gmail.com');
        await passwordField.sendKeys('12qwaszx'); 
        await loginButton.click();
        await browser.sleep(10000);
        expect(browser.getCurrentUrl()).toEqual("https://www.freelancer.com/dashboard/");
    });
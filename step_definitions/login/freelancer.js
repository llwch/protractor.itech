var mainPage = require('../../support/main.page');

describe('login to the freelancer.com', function() {
  
    beforeEach(async function() {
        var mainPage = new mainPage();
        await mainPage.get();
    });
  
    it('should verify title name', async function() {
        expect(browser.getTitle()).toEqual('Hire Freelancers & Find Freelance Jobs Online - Freelancer');
    });
  
    it('should open login modal', async function(){
        await mainPage.openLoginform();
        await browser.refresh();
        expect(browser.getCurrentUrl()).toEqual("https://www.freelancer.com/login");
    });

    it('should check validation error for username', async function(){
        await mainPage.openLoginform();
        await browser.refresh();

        let loginField = element(by.id('username'));
        let passwordField = element(by.id('password'));
        let loginButton = element(by.id('login_btn'));
        await loginField.sendKeys('abyss.itechgmail.com');
        await browser.sleep(10000);
        let usernameError = element(by.css("[ng-message='validEmailUsername']"));
        expect(usernameError.getText()).toEqual('Please enter a valid username or email address.');
    });

    it('should check validation error for empty password', async function(){
        await mainPage.openLoginform();
        await browser.refresh();

        let loginField = element(by.id('username'));
        let passwordField = element(by.id('password'));
        let loginButton = element(by.id('login_btn'));
        await loginField.sendKeys('abyss.itech@gmail.com');
        await passwordField.sendKeys('');
        await browser.sleep(1000);
        await loginButton.click();
        let passwordError = element(by.css("[ng-message='required']"));
        expect(passwordError.getText()).toEqual('Please enter your password.');
    });

    it('should login to app', async function() {
        await mainPage.openLoginform();
        await browser.refresh();

        let loginField = element(by.id('username'));
        let passwordField = element(by.id('password'));
        let loginButton = element(by.id('login_btn'));
        await loginField.sendKeys('abyss.itech@gmail.com');
        await passwordField.sendKeys('12qwaszx');
            
        await loginButton.click();
        await browser.sleep(10000);
        expect(browser.getCurrentUrl()).toEqual("https://www.freelancer.com/dashboard/");
    });
  });
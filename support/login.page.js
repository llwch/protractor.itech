const Page = require('./page');
class LoginPage extends Page{
  constructor() {
    super();
    this.url = 'https://www.freelancer.com/login/';
    this.data = {
      logo: element(by.css("[i18n-msg='Freelancer Logo']")),
      loginField: element(by.id('username')),
      passwordField: element(by.id('password')),
      loginButton: element(by.id('login_btn')),
      usernameError: element(by.css("[ng-message='validEmailUsername']")),
      passwordError: element(by.css("[ng-message='required']"))
    } 
  }
    async login(name,pass){
      await this.data.loginField.sendKeys(name);
      await this.data.passwordField.sendKeys(pass);
      await this.data.loginButton.click();
    }
  }
  module.exports = LoginPage;
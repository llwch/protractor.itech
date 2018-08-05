const mainPage = function() {
    let loginLink = element(by.css("[data-uitest-target='login-button']"));

    this.get = async function() {
        await browser.get('https://www.freelancer.com/');
      };

    this.openLoginform = async function() {
        loginLink.click();
    };
};
  module.exports = new mainPage();
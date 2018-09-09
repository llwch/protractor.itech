const Page = require('./page');
class MainPage extends Page{
    constructor(){
        super();
        this.url = 'https://www.freelancer.com/';
        this.data = {
            loginLink: element(by.css("[data-uitest-target='login-button']")),
            logo: element(by.css("[alt='Freelancer Logo']")),
        }
    }
    async openLoginform (){
        await this.data.loginLink.click();
    }
}
module.exports = MainPage;
const Page = require('./page');
class DashboardPage extends Page {
    constructor(){
        super();
        this.url = 'https://www.freelancer.com/dashboard/';
    }  
}
module.exports = new DashboardPage();
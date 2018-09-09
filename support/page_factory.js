const MainPage = require('./main.page');
const LoginPage = require('./login.page');
const DashboardPage = require('./dashboard.page');
let pageFactory = {
    currentPage: null,
    pages: {
        'main page': MainPage,
        'login page': LoginPage,
        'dashboard': DashboardPage
    },
    getPage(pageName) {
        this.currentPage = new this.pages[pageName]();
        return this.currentPage;
    }
};
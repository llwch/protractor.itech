const MainPage = require('./main.page');
const LoginPage = require('./login.page');
let pageFactory = {
    currentPage: null,
    pages: {
        'main page': MainPage,
        'login page': LoginPage
    },
    getPage(pageName) {
        this.currentPage = new this.pages[pageName]();
        return this.currentPage;
    }
};
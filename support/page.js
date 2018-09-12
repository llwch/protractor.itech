class Page {
    constructor(){}
    
    getUrl(){
        return browser.getCurrentUrl();
    }

    goToPage(){
        return browser.get(this.url);
    }

    isElementVisible(name){
        return this.data[name].isDisplayed();
    }

    clickToElement(element){
        return this.data[element].click();
    }
}
module.exports = Page;
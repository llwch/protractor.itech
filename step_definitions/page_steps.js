let cucumber = require('cucumber');
let pageFactory = require('../support/page_factory');
let expect = require('chai').expect;
cucumber.defineSupportCode(function({Then}) {
    Then(/^Element '(.+)' should be displayed$/, async function(elementName){
        let state = await pageFactory.currentPage.isElementVisible(elementName);
        expect(state).to.equal(true);
    });
});

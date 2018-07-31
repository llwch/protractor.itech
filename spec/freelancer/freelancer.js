describe('login to the freelancer.com', function() {
    let loginLink = element(by.css('.LoginSection-btn'));
  
    beforeEach(async function() {
        await browser.get('https://www.freelancer.com/');
    });
  
    it('should verify title name', async function() {
        expect(browser.getTitle()).toEqual('Hire Freelancers & Find Freelance Jobs Online - Freelancer');
    });
  
    it('should open login modal', async function(){
        //await browser.get('https://www.freelancer.com/login');
        await loginLink.click();
        await browser.refresh();
        expect(browser.driver.getCurrentUrl()).toEqual("https://www.freelancer.com/login");
        await browser.sleep(30000);
    });

    it('should login to app', async function() {
        let loginField = element(by.id('username'));
        let passwordField = element(by.id('password'));
        let loginButton = element(by.id('login_btn'));
        console.log('111111111111111111')
        await loginField.sendKeys('abyss.itech@gmail.com');
        await passwordField.sendKeys('12qwaszx');
        console.log('2222222222222222222')
    
        await loginButton.click();
        await browser.sleep(10000);
        expect(browser.driver.getCurrentUrl()).toEqual("https://www.freelancer.com/dashboard/");
    });  
  });
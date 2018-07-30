describe('login to the freelancer.com', function() {
    let loginLink = element(by.className('LoginSection-btn'));
  
    beforeEach(function() {
        browser.get('https://www.freelancer.com/');
    });
  
    it('should verify title name', function() {
        expect(browser.getTitle()).toEqual('Hire Freelancers & Find Freelance Jobs Online - Freelancer');
    });
  
    it('should open login modal', function(){
        loginLink.click();
        browser.sleep(10000);
        expect(browser.driver.getCurrentUrl()).toEqual("https://www.freelancer.com/login");
    });

    it('should login to app', async function() {
        let loginField = element(by.name('Email or Username'));
        let passwordField = element(by.name('Password'));
        let loginButton = element(by.id('login_btn'));
        
        await loginField.sendKeys('abyss.itech@gmail.com');
        await passwordField.sendKeys('12qwaszx');
    
        loginButton.click();
        browser.sleep(3000);
      expect(browser.driver.getCurrentUrl()).toEqual("https://www.freelancer.com/dashboard/");
    });  
  });
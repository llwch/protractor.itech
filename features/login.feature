@login
Feature: Login with validations
   As a user
   I open main page and login to the application
   User is able to login

Scenario: login steps
Given I am on the 'login page'
Then Element 'logo' should be displayed
When I login to the application
Then Element 'logo' should be displayed
And I should verify title name
And I should open login modal
Then I should check validation error for username
And I should check validation error for empty password
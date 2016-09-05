Feature: App-SignUp
  As a new user i want to create account in an App


  Scenario Outline: Create new Account in App
    Given  I have an app
    When I click on new registration button App_Registration_Button
    And I Enter the Value <name> in TextField App_SignUp_Name
    And I Enter the Value <email> in TextField App_SignUp_Email
    And I Enter the Value <password> in TextField App_SignUp_Password
    And I Select the App_SignUp_Gender
    And I Select the App_SignUp_Version
    And I Click on App_SignUp_Submit_Button


Examples:
  |name    |email                         |password |
  |gurpreet|gurpreet.gtbit2013@gmail.com  |12345    |

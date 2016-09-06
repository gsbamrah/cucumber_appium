$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test/DemoApp_SignUp.feature");
formatter.feature({
  "line": 1,
  "name": "App-SignUp",
  "description": "As a new user i want to create account in an App",
  "id": "app-signup",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 19,
  "name": "Create new Account in App",
  "description": "",
  "id": "app-signup;create-new-account-in-app;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I have an app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on new registration button App_Registration_Button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Enter the Value gurpreet in TextField App_SignUp_Name",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Enter the Value gurpreet.gtbit2013@gmail.com in TextField App_SignUp_Email",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Enter the Value 12345 in TextField App_SignUp_Password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I close the keypad",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select the App_SignUp_Gender",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Select the App_SignUp_Version",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Click on App_SignUp_Submit_Button",
  "keyword": "And "
});
formatter.match({
  "location": "AppSteps.i_have_app()"
});
formatter.result({
  "duration": 66484746198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "App_Registration_Button",
      "offset": 35
    }
  ],
  "location": "AppSteps.i_click_on_registration_form(String)"
});
formatter.result({
  "duration": 2171318909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gurpreet",
      "offset": 18
    },
    {
      "val": "App_SignUp_Name",
      "offset": 40
    }
  ],
  "location": "AppSteps.Enter_Name(String,String)"
});
formatter.result({
  "duration": 6212251880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gurpreet.gtbit2013@gmail.com",
      "offset": 18
    },
    {
      "val": "App_SignUp_Email",
      "offset": 60
    }
  ],
  "location": "AppSteps.Enter_Name(String,String)"
});
formatter.result({
  "duration": 6868216915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 18
    },
    {
      "val": "App_SignUp_Password",
      "offset": 37
    }
  ],
  "location": "AppSteps.Enter_Name(String,String)"
});
formatter.result({
  "duration": 5856062968,
  "status": "passed"
});
formatter.match({
  "location": "AppSteps.close_keypad()"
});
formatter.result({
  "duration": 608740407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "App_SignUp_Gender",
      "offset": 13
    }
  ],
  "location": "AppSteps.select_checkbox(String)"
});
formatter.result({
  "duration": 998518177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "App_SignUp_Version",
      "offset": 13
    }
  ],
  "location": "AppSteps.select_checkbox(String)"
});
formatter.result({
  "duration": 1013380033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "App_SignUp_Submit_Button",
      "offset": 11
    }
  ],
  "location": "AppSteps.click_on(String)"
});
formatter.result({
  "duration": 3984600154,
  "status": "passed"
});
});
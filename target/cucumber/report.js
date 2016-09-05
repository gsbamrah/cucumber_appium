$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test/DemoApp_SignUp.feature");
formatter.feature({
  "line": 1,
  "name": "App-SignUp",
  "description": "As a new user i want to create account in an App",
  "id": "app-signup",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 18,
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
  "name": "I Select the App_SignUp_Gender",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select the App_SignUp_Version",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Click on App_SignUp_Submit_Button",
  "keyword": "And "
});
formatter.match({
  "location": "AppSteps.i_have_app()"
});
formatter.result({
  "duration": 56799310793,
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
  "duration": 4760100019,
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
  "duration": 6264166372,
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
  "duration": 6775834279,
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
  "duration": 5751614075,
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
  "duration": 1526850065,
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
  "duration": 2540662873,
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
  "duration": 50265955677,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 50 seconds waiting for element to be clickable: By.id: com.example.gurpreetsingh.appforappium:id/button1\nBuild info: version: \u00272.46.0\u0027, revision: \u002761506a4624b13675f24581e453592342b7485d71\u0027, time: \u00272015-06-04 10:22:50\u0027\nSystem info: host: \u0027Xe-t-gurpreets\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app\u003dC:\\Users\\gurpreetsingh\\AppData\\Local\\Android\\sdk\\platform-tools\\app-debug.apk, networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003demulator-5554, platform\u003dLINUX, desired\u003d{app\u003dC:\\Users\\gurpreetsingh\\AppData\\Local\\Android\\sdk\\platform-tools\\app-debug.apk, platformName\u003dAndroid, device\u003dAndroid, deviceName\u003dAndroid}, platformVersion\u003d6.0, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, browserName\u003dAndroid, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dAndroid, device\u003dAndroid}]\nSession ID: 81352f4e-cfdd-431c-8ad0-1654ca589e67\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:229)\r\n\tat pages.HomePage.waitForClickabilityOf(HomePage.java:40)\r\n\tat pages.HomePage.click(HomePage.java:26)\r\n\tat steps.AppSteps.click_on(AppSteps.java:53)\r\n\tat ✽.And I Click on App_SignUp_Submit_Button(Test/DemoApp_SignUp.feature:13)\r\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 49 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.46.0\u0027, revision: \u002761506a4624b13675f24581e453592342b7485d71\u0027, time: \u00272015-06-04 10:22:50\u0027\nSystem info: host: \u0027Xe-t-gurpreets\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app\u003dC:\\Users\\gurpreetsingh\\AppData\\Local\\Android\\sdk\\platform-tools\\app-debug.apk, networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003demulator-5554, platform\u003dLINUX, desired\u003d{app\u003dC:\\Users\\gurpreetsingh\\AppData\\Local\\Android\\sdk\\platform-tools\\app-debug.apk, platformName\u003dAndroid, device\u003dAndroid, deviceName\u003dAndroid}, platformVersion\u003d6.0, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, browserName\u003dAndroid, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dAndroid, device\u003dAndroid}]\nSession ID: 81352f4e-cfdd-431c-8ad0-1654ca589e67\n*** Element info: {Using\u003did, value\u003dcom.example.gurpreetsingh.appforappium:id/button1}\r\n\tat sun.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:27)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:399)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:47)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:215)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:37)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:809)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$20.apply(ExpectedConditions.java:603)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$20.apply(ExpectedConditions.java:596)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat pages.HomePage.waitForClickabilityOf(HomePage.java:40)\r\n\tat pages.HomePage.click(HomePage.java:26)\r\n\tat steps.AppSteps.click_on(AppSteps.java:53)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:234)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:74)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:144)\r\n",
  "status": "failed"
});
});
package steps;

import androidsetup.AndroidSetup;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import pages.HomePage;

/**
 * Created by gurpreetsingh on 9/4/2016.
 */
public class AppSteps extends  AndroidSetup {

    private HomePage page;

    @BeforeClass
    public void setUp() throws Exception {
        prepareAndroidForAppium();
    }


    @AfterClass
    public void tearDown() throws Exception {
        driver.quit();
    }

    @Given("^I have an app$")
    public void i_have_app() throws Throwable {
        setUp();
    }

    @When("^I click on new registration button ([^\\\"]*)$")
    public void i_click_on_registration_form(String Locator) throws Throwable {
        new HomePage(driver).click(Locator);
    }


    @And("^I Enter the Value ([^\\\"]*) in TextField ([^\\\"]*)$")
    public void Enter_Name(String Value, String Locator) throws Throwable {
        new HomePage(driver).Enter(Value,Locator);
    }

    @And("^I Select the ([^\\\"]*)$")
    public void select_checkbox(String locator) throws Throwable {
        new HomePage(driver).click(locator);
        driver.navigate().back();
    }

    @And("^I Click on ([^\\\"]*)$")
    public void click_on(String locator) throws Throwable {
        new HomePage(driver).click(locator);
    }

}
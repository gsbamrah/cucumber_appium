package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by gurpreetsingh on 9/4/2016.
 */
    @RunWith(Cucumber.class)
    @CucumberOptions(
            format = { "pretty", "html:target/cucumber" },
            glue = "steps",
            features = "classpath:Test/DemoApp_SignUp.feature")
    public class cucumber_runner {
    }

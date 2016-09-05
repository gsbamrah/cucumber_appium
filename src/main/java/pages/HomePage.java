package pages;

import Utility.LocatorReader;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.io.IOException;
import java.util.Properties;

public class HomePage{
    protected WebDriver driver;
    String app_package_name = "com.example.gurpreetsingh.appforappium:id/";
    Properties prop;
    WebElement Element;


    public HomePage(WebDriver driver) throws IOException {
        this.driver = driver;
        prop = LocatorReader.LocReader();
    }

    public void click(String locator) throws IOException{
        By button_locator = By.id(app_package_name + prop.getProperty(locator));
        waitForClickabilityOf(button_locator);
        WebElement  Element=driver.findElement(button_locator);
        Element.click();
}

    public void Enter(String value,String locator) {
        By userId = By.id(app_package_name + prop.getProperty(locator));
        WebElement Element = driver.findElement(userId);
        Element.sendKeys(value);
    }


    protected void waitForClickabilityOf(By locator) {
        WebDriverWait wait = new WebDriverWait(driver, 50);
        wait.until(ExpectedConditions.elementToBeClickable(locator));
    }
    }
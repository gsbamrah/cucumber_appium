package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Created by gurpreet on 13/09/14.
 */
public class BasePage {


    protected  static WebDriver driver;
   // String app_package_name = "com.flipkart.android:id/";
   String app_package_name = "com.xebia.mkishor.appiumdemoapp:id/";

    public BasePage(WebDriver driver) {
        this.driver = driver;
    }

    protected void waitForVisibilityOf(By locator) {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }
   }
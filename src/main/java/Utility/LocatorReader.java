package Utility;


import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

/**
 * Created by gurpreetsingh on 9/4/2016.
 */
public class LocatorReader {

        public static Properties LocReader() throws IOException{
            //Create Object of Properties Class.
            Properties prop = new Properties();
            //Create Object of FileInputStream Class. Pass file path.
            FileInputStream objfile = new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\resources\\Locators\\Locator.properties");
            //Pass object reference objfile to load method of Properties object.
            prop.load(objfile);

            return prop;
            //Accessing element locators of all web elements using obj.getProperty(key)
         //   System.out.println(obj.getProperty("eight"));

        }
    }


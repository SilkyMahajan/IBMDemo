package Utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
//import net.bytebuddy.asm.Advice.Return;

public class Hooks {
    public static WebDriver driver; 
    
     @Before
        public void beforeScenario(){
         System.setProperty("webdriver.chrome.driver", "C:\\Silky\\SeleniumTraining\\Workspace\\Project\\IBM\\bin\\chromedriver.exe");
         System.out.println("This will run before the Scenario");
         driver = new ChromeDriver();
        
        
         
        } 
     
    // @After
      //  public static void afterScenario(){
        //    System.out.println("This will run after the Scenario");
          //  driver.quit();
        //}
     
}
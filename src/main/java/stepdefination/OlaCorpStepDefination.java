package stepdefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import Utilities.Hooks;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class OlaCorpStepDefination {
	
	 WebDriver driver=Hooks.driver;
	 @Given("^User is on OlaCorp page$")
	 public void user_is_on_OlaCorp_page() throws Throwable {
		 driver.get("https://corporate.olacabs.com/#/contact");
		 Thread.sleep(5000);		
		 driver.findElement(By.id("link-contact")).click();
	 }

	 @When("^User Enter value in Name Text box \"([^\"]*)\"$")
	 public void user_Enter_value_in_Name_Text_box(String arg1) throws Throwable {
		 driver.findElement(By.id("email43")).sendKeys(arg1);
		 
	 }
	 
	 @Then("^Result will display \"([^\"]*)\"$")
	 public void result_will_display(String arg1) throws Throwable {
		 System.out.println("arg1"); 
	 }
	 
	 @When("^User Enter value in email Text box \"([^\"]*)\"$")
	 public void user_Enter_value_in_email_Text_box(String arg1) throws Throwable {
		 driver.findElement(By.name("email")).sendKeys(arg1);  
	 }

}
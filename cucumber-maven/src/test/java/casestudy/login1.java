package casestudy;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class login1 {
	WebDriver driver;
	@Given("url {string}")
	
	public void url(String string) {
	    // Write code here that turns the phrase above into concrete actions
		String chromePath="C:\\Users\\a07208trng_b4a.04.26\\Desktop\\selenium\\jars\\chromedriver_win32 (1)\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver",chromePath );
    driver=new ChromeDriver();
     driver.get(string);
	}

	@When("person types {string} as username")
	public void person_types_as_username(String string) {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("userName")).sendKeys(string);
	}

	@When("person types {string} as password")
	public void person_types_as_password(String string) {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("password")).sendKeys(string);
	}

	@Then("homepage is displayed")
	public void homepage_is_displayed() {
	    // Write code here that turns the phrase above into concrete actions
	    
	}


}

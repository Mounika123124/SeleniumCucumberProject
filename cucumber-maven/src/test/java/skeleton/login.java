package skeleton;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.Loginpage;

public class login {
	WebDriver driver;
	@Before
	public void init()
	{
		System.out.println("in before scenario");
		String chromePath="C:\\Users\\a07208trng_b4a.04.26\\Desktop\\selenium\\jars\\chromedriver_win32 (1)\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver",chromePath );
		 driver=new ChromeDriver();
		driver.manage().window().maximize();
		PageFactory.initElements(driver,Loginpage.class);
	}
	@After
	public void destroy()
	{
		System.out.println("in after scenario");
		driver.close();
	}
	@Given("url of webshop is {string}")
	public void url_of_webshop_is(String string) {
	    // Write code here that turns the phrase above into concrete actions
		driver.get(string);
	}

	@When("user enters {string} as username")
	public void user_enters_as_username(String string) {
	    // Write code here that turns the phrase above into concrete actions
	   Loginpage.email.sendKeys(string);
	}

	@When("user enters {string} as password")
	public void user_enters_as_password(String string) {
	    // Write code here that turns the phrase above into concrete actions
	   Loginpage.password.sendKeys(string);
	}

	@Then("user is in webshop as {word}")
	public void user_is_in_webshop_as(String type) {
	    // Write code here that turns the phrase above into concrete actions
				Loginpage.signin.click();
			
	}
	}
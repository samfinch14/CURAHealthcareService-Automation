/// <reference types = "Cypress" />
import LoginPage from "../PageObjects/LoginPage";
import LandingPage from "../PageObjects/LandingPage";
import HomePage from "../PageObjects/HomePage";
const loginP = new LoginPage();
const landingP = new LandingPage();
describe("Login Test", () => {
  it("Valid login test", () => {
    const homeP = new HomePage();
    landingP.clickHamburgerIcon();
    landingP.clickLoginLink();
    loginP.fillUsername("John Doe");
    loginP.fillPassword("ThisIsNotAPassword");
    loginP.clickLogin();
    homeP.elements.homePageTitle().should("have.text", "Make Appointment");
  });
  it("Invalid login test", () => {
    landingP.clickHamburgerIcon();
    landingP.clickLoginLink();
    loginP.fillUsername("123");
    loginP.fillPassword("123");
    loginP.clickLogin();
    loginP.elements
      .errorLoginMessage()
      .should(
        "have.text",
        "Login failed! Please ensure the username and password are valid."
      );
  });
});

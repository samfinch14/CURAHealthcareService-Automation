/// <reference types = "Cypress" />
import LoginPage from "../PageObjects/LoginPage";
import LandingPage from "../PageObjects/LandingPage";
import HomePage from "../PageObjects/HomePage";

describe("Logout link Test", () => {
  it("Verify Logout link is working", () => {
    const loginP = new LoginPage();
    const landingP = new LandingPage();
    const homeP = new HomePage();
    landingP.clickHamburgerIcon();
    landingP.clickLoginLink();
    loginP.fillUsername("John Doe");
    loginP.fillPassword("ThisIsNotAPassword");
    loginP.clickLogin();
    landingP.clickHamburgerIcon();
    homeP.clickLogoutLinkMenu();
    homeP.elements.logoutLinkMenu().should("not.exist");
  });
});

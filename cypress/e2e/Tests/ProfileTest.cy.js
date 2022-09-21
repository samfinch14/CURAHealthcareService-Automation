/// <reference types = "Cypress" />
import LoginPage from "../PageObjects/LoginPage";
import LandingPage from "../PageObjects/LandingPage";
import HomePage from "../PageObjects/HomePage";
import ProfilePage from "../PageObjects/ProfilePage";
const loginP = new LoginPage();
const landingP = new LandingPage();
const homeP = new HomePage();
const profileP = new ProfilePage();
describe("Profile page test", () => {
  it("Verify Profile page is loaded successfully", () => {
    let username = "John Doe",
      password = "ThisIsNotAPassword";
    landingP.clickMakeAppointmentLink();
    loginP.fillUsername(username);
    loginP.fillPassword(password);
    loginP.clickLogin();
    landingP.clickHamburgerIcon();
    homeP.clickProfileLinkMenu();
    profileP.elements.profileTitle().should("have.text", "Profile");
    profileP.elements.logoutBtn().should("exist");
  });
});

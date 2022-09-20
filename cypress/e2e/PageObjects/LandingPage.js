/// <reference types = "Cypress" />
class LandingPage {
  elements = {
    hamburgerIcon: () => cy.xpath('//*[@id="menu-toggle"]'),
    loginLink: () => cy.get(".sidebar-nav > :nth-child(4) > a"),
    makeAppointmentLink: () => cy.xpath('//*[@id="btn-make-appointment"]'),
  };
  clickHamburgerIcon() {
    this.elements.hamburgerIcon().click();
  }
  clickLoginLink() {
    this.elements.loginLink().click();
  }
  clickMakeAppointmentLink() {
    this.elements.makeAppointmentLink().click();
  }
}
export default LandingPage;

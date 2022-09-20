/// <reference types = "Cypress" />
class LoginPage {
  elements = {
    usernameInput: () => cy.xpath('//*[@id="txt-username"]'),
    passwordInput: () => cy.xpath('//*[@id="txt-password"]'),
    loginBtn: () => cy.xpath('//*[@id="btn-login"]'),
    errorLoginMessage: () => cy.get('[class="lead text-danger"]'),
  };

  fillUsername(username) {
    this.elements.usernameInput().type(username);
  }
  fillPassword(password) {
    this.elements.passwordInput().type(password);
  }
  clickLogin() {
    this.elements.loginBtn().click();
  }
}
export default LoginPage;

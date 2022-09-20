/// <reference types = "Cypress" />
class ProfilePage {
  elements = {
    profileTitle: () => cy.get("h2"),
    logoutBtn: () => cy.get(":nth-child(3) > .btn"),
  };
}
export default ProfilePage;

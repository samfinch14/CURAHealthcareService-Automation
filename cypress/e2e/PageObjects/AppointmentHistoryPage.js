/// <reference types = "Cypress" />
class AppointmentHistoryPage {
  elements = {
    visitDateHistory: () => cy.get(".panel-heading"),
    historyPageTitle: () => cy.get("h2"),
    gotoHomepageBtn: () => cy.get(".text-center > .btn"),
    noHistAppointmentMessage: () => cy.get(".col-sm-12 > p"),
  };
}
export default AppointmentHistoryPage;

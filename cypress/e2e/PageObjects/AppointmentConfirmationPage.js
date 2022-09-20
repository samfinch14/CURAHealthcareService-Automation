/// <reference types = "Cypress" />
class AppointmentConfirmationPage {
  elements = {
    appointmentConfirmationTitle: () => cy.get("h2"),
    facilitySummary: () => cy.get("#facility"),
    hospitalReadmissionSummary: () => cy.get("#hospital_readmission"),
    healthcareProgramSummary: () => cy.get("#program"),
    visitDateSummary: () => cy.get("#visit_date"),
    commentSummary: () => cy.get("#comment"),
  };
}
export default AppointmentConfirmationPage;

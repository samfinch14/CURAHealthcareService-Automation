/// <reference types = "Cypress" />
class HomePage {
  elements = {
    homePageTitle: () => cy.get("h2"),
    facilityDropdown: () => cy.get("select"),
    hospitalReadmissionCheckbox: () => cy.get("#chk_hospotal_readmission"),
    healthcareProgramRadioBtn: () => cy.get('[type="radio"]'),
    visitDateTextField: () => cy.get("#txt_visit_date"),
    commentBox: () => cy.get("#txt_comment"),
    bookAppointmentBtn: () => cy.get("#btn-book-appointment"),
    clickBody: () => cy.get("body"),
    logoutLinkMenu: () => cy.get(":nth-child(6) > a"),
    historyLinkMenu: () => cy.get(":nth-child(4) > a"),
    profileLinkMenu: () => cy.get(".sidebar-nav > :nth-child(5) > a"),
  };
  selectFacility(facility) {
    this.elements.facilityDropdown().select(facility);
  }
  clickHospitalReadmission(hospitalReadmissionCheckbox) {
    if (hospitalReadmissionCheckbox == "Yes") {
      this.elements.hospitalReadmissionCheckbox().check();
    } else {
      this.elements.hospitalReadmissionCheckbox().uncheck();
    }
  }
  selectHealthcareProgram(healthcareProg) {
    this.elements.healthcareProgramRadioBtn().check(healthcareProg);
  }
  fillVisitDate(visitDate) {
    this.elements.visitDateTextField().type(visitDate);
    this.elements.clickBody().click(0, 0);
  }
  fillComment(enterComment) {
    this.elements.commentBox().type(enterComment);
  }
  clickbookAppointmentBtn() {
    this.elements.bookAppointmentBtn().click();
  }
  clickLogoutLinkMenu() {
    this.elements.logoutLinkMenu().click();
  }
  clickHistoryLinkMenu() {
    this.elements.historyLinkMenu().click();
  }
  clickProfileLinkMenu() {
    this.elements.profileLinkMenu().click();
  }
}
export default HomePage;

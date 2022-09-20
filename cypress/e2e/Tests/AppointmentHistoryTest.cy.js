/// <reference types = "Cypress" />
import LoginPage from "../PageObjects/LoginPage";
import LandingPage from "../PageObjects/LandingPage";
import HomePage from "../PageObjects/HomePage";
import AppointmentConfirmationPage from "../PageObjects/AppointmentConfirmationPage";
import AppointmentHistoryPage from "../PageObjects/AppointmentHistoryPage";
let username = "John Doe",
  password = "ThisIsNotAPassword",
  facility = "Seoul CURA Healthcare Center",
  hospitalReadmission = "No",
  healthcareProgram = "None",
  visitDate = "27/11/2023",
  comment = "This is a test for History link";
describe("Appointment History Test", () => {
  beforeEach(() => {
    const loginP = new LoginPage();
    const landingP = new LandingPage();
    landingP.clickMakeAppointmentLink();
    loginP.fillUsername(username);
    loginP.fillPassword(password);
    loginP.clickLogin();
  });
  it("User is able to view history with appointment", () => {
    const homeP = new HomePage();
    const landingP = new LandingPage();
    const appointmentHistP = new AppointmentHistoryPage();
    const appointmentConfP = new AppointmentConfirmationPage();
    homeP.selectFacility(facility);
    homeP.clickHospitalReadmission(hospitalReadmission);
    homeP.selectHealthcareProgram(healthcareProgram);
    homeP.fillVisitDate(visitDate);
    homeP.fillComment(comment);
    homeP.clickbookAppointmentBtn();
    landingP.clickHamburgerIcon();
    homeP.clickHistoryLinkMenu();
    appointmentHistP.elements.historyPageTitle().should("have.text", "History");
    appointmentHistP.elements.visitDateHistory().should("have.text", visitDate);
    appointmentConfP.elements.facilitySummary().should("have.text", facility);
    appointmentConfP.elements
      .hospitalReadmissionSummary()
      .should("have.text", hospitalReadmission);
    appointmentConfP.elements
      .healthcareProgramSummary()
      .should("have.text", healthcareProgram);
    appointmentConfP.elements.commentSummary().should("have.text", comment);
  });
  it("User is able to view history without appointment", () => {
    const homeP = new HomePage();
    const landingP = new LandingPage();
    const appointmentHistP = new AppointmentHistoryPage();
    landingP.clickHamburgerIcon();
    homeP.clickHistoryLinkMenu();
    appointmentHistP.elements.historyPageTitle().should("have.text", "History");
    appointmentHistP.elements
      .noHistAppointmentMessage()
      .should("have.text", "No appointment.");
    appointmentHistP.elements.gotoHomepageBtn().should("exist");
  });
});

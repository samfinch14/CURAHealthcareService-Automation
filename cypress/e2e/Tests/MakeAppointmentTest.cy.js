/// <reference types = "Cypress" />
import LoginPage from "../PageObjects/LoginPage";
import LandingPage from "../PageObjects/LandingPage";
import HomePage from "../PageObjects/HomePage";
import AppointmentConfirmationPage from "../PageObjects/AppointmentConfirmationPage";

describe("Make an Appointment Test", () => {
  it("User is able to book an appointment successfully", () => {
    const loginP = new LoginPage();
    const landingP = new LandingPage();
    const homeP = new HomePage();
    const appointmentConfP = new AppointmentConfirmationPage();
    let username = "John Doe",
      password = "ThisIsNotAPassword",
      facility = "Seoul CURA Healthcare Center",
      hospitalReadmission = "Yes",
      healthcareProgram = "None",
      visitDate = "22/12/2022",
      comment = "This is a test";
    landingP.clickMakeAppointmentLink();
    loginP.fillUsername(username);
    loginP.fillPassword(password);
    loginP.clickLogin();
    homeP.selectFacility(facility);
    homeP.clickHospitalReadmission(hospitalReadmission);
    homeP.selectHealthcareProgram(healthcareProgram);
    homeP.fillVisitDate(visitDate);
    homeP.fillComment(comment);
    homeP.clickbookAppointmentBtn();
    appointmentConfP.elements.facilitySummary().should("have.text", facility);
    appointmentConfP.elements
      .hospitalReadmissionSummary()
      .should("have.text", hospitalReadmission);
    appointmentConfP.elements
      .healthcareProgramSummary()
      .should("have.text", healthcareProgram);
    appointmentConfP.elements.visitDateSummary().should("have.text", visitDate);
    appointmentConfP.elements.commentSummary().should("have.text", comment);
  });
});

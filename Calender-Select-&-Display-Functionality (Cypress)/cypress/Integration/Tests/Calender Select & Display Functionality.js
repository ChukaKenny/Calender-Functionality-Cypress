/// <reference types="Cypress"/> 
import Homepages from "../Object Repository/homepage"
import Calenderpages from "../Object Repository/calenderpage"
import Dateboxpages from "../Object Repository/datebox"
const Homepage = new Homepages
const Calenderpage = new Calenderpages
const Dateboxpage = new Dateboxpages


describe('Calenders Testsuite', () => {

  it('Calender Select & Display Functionality', () => {
    
    cy.visit(Cypress.env('url'));
    Homepage.getTopDealsButton().invoke("removeAttr", "target").click();
    Calenderpage.getCalenderIcon().click();
    Calenderpage.getMonthYearButton().click();
    Calenderpage.getYearButton().click();
    Calenderpage.selectYear().click()
    Calenderpage.selectMonth().click()
    Calenderpage.selectDay().click()
    Dateboxpage.verifyDateBoxContent()
    
   
  });

});

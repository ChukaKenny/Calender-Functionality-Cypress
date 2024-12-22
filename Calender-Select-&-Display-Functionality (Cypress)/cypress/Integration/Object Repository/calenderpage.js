import {randomYear, selectedYear, monthsOfTheYear,randomMonthIndex,selectedRandomMonthIndex,randomMonth,selectedMonth,
    randomDay,selectedDay,generatedDate} from "../Variables/variables"

class Calenderpages { 

    getCalenderIcon(){
        return cy.get(".react-date-picker__calendar-button__icon")
    }

    getMonthYearButton(){
        return cy.get(".react-calendar__navigation__label__labelText")
    }
    
    getYearButton(){
        return cy.get(".react-calendar__navigation__label__labelText")
    }

    selectYear(){
        return cy.contains("button.react-calendar__decade-view__years__year", selectedYear)
    }

    selectMonth(){
        return cy.contains("button", selectedMonth)
    }

    selectDay(){
        return cy.contains("button.react-calendar__month-view__days__day", selectedDay)
    }
       


}
    export default Calenderpages
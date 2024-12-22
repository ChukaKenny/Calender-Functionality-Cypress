import {randomYear, selectedYear, monthsOfTheYear,randomMonthIndex,selectedRandomMonthIndex,randomMonth,selectedMonth,
    randomDay,selectedDay,generatedDate} from "../Variables/variables"

class Dateboxpages {

    verifyDateBoxContent() { 
        
        return cy.get(".react-date-picker__inputGroup__input").each(($el, index) => {
            cy.wrap($el).invoke('val').then((val) => {
                let value = Number(val);  
                expect(value).to.equal(generatedDate[index]);  
                cy.log(generatedDate);
            });
        });
  
        




    }

}
        
export default Dateboxpages
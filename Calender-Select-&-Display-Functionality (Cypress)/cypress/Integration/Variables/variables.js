let randomYear = 2021 + (Math.floor(Math.random() * 9));
let selectedYear = randomYear;
let monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let randomMonthIndex = Math.floor(Math.random() * 12);
let selectedRandomMonthIndex = randomMonthIndex;
let randomMonth = monthsOfTheYear[selectedRandomMonthIndex];
let selectedMonth = randomMonth;
let randomDay = 1 + (Math.floor(Math.random() * 18));
let selectedDay = randomDay;
let generatedDate = [(selectedRandomMonthIndex + 1), selectedDay, selectedYear];

export {randomYear, selectedYear, monthsOfTheYear,randomMonthIndex,selectedRandomMonthIndex,randomMonth,selectedMonth,
    randomDay,selectedDay,generatedDate};


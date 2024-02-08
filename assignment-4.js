function calculateMoney(ticketSale) {
    if(ticketSale < 0) {
        return "Please provide a positive number";
    }
    const ticketPrice = 120;
    const guirdSallary = 500;
    const eightServentForLaunch = 50 * 8;
    const parTicketSale = ticketPrice * ticketSale;
    const parDayExpend = guirdSallary + eightServentForLaunch;
    const total = parTicketSale - parDayExpend;
    return total;
}

function checkName(name) {
    if(typeof name !== "string") {
        return "invalid";
    }
    const toLowerCase = name.toLowerCase();
    const endValue = toLowerCase.charAt(toLowerCase.length-1);
    const charecter = 'Ayieouw';
    if(charecter.includes(endValue)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}

function deleteInvalids(arrays) {
    if(!Array.isArray(arrays)) {
        return "You have to give an array"
    }
    const newArray = [];
    for(const array of arrays) {
        if(typeof array === "number" && !isNaN(array)){
            newArray.push(array);
        }
    }
    return newArray;
}

function password(obj) {
    const name = obj.name;
    const birthYear = obj.birthYear.toString();
    const siteName = obj.siteName;
    if(birthYear.length < 4) {
        return "invalid"
    }
    if(name === undefined || birthYear === undefined || siteName === undefined) {
        return "invalid"
    }
    const firstCharUpperCase = siteName.charAt(0).toUpperCase() + siteName.slice(1);
    return `${firstCharUpperCase}#${name}@${birthYear}`;

}

function monthlySavings(arr , livingCost) {
    if(!Array.isArray(arr)) {
        return "invalid input";
    }
    if(typeof livingCost !== "number") {
        return "invalid input";
    }
    let sumAfterText = 0;
    let sumless3000Income = 0;
    for(const income of arr) {
        if(income >= 3000) {
            let afterText = income / 100 * 20;
            sumAfterText = income - afterText;
        }
        else {
            sumless3000Income += income;
        }
    }
    let totalIncome = sumAfterText + sumless3000Income;
    if(totalIncome < livingCost) {
        return "earn More";
    }
    else {
        return totalIncome - livingCost;
    }
    
}
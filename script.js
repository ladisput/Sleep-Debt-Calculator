//Calculate Ideal Sleep Per Age
const getIdealHours = age => {
    let idealHours;
        if (age < 0) { //unborn
            idealHours = "invalid";
        }
        else if (age == 0) { //less than 1
            idealHours = 15;
        }
        else if (age < 3) { //1-2
            idealHours = 12;
        }
        else if (age < 6) { //3-5
            idealHours = 11;
        }
        else if (age < 14) { //6-13
            idealHours = 10;
        }
        else if (age < 18) { //14-17
            idealHours = 9;
        }
        else if (age < 65) { //18-64
            idealHours = 8;
        }
        else { //65+
            idealHours = 7;
        }
    return idealHours;
}

//Calculate actual hours slept this week
const getTotalHoursSlept = () => {
    return saturday + sunday + monday + tuesday + wednesday + thursday + friday;
}

//Calculate sleep deficit per day
const calcDailySleepDebt = (day) => {
    let sleepDebt = day - getIdealHours(age);
    return sleepDebt;
}

//Calculate weekly sleep deficit
const calcTotalSleepDebt = () => {
    let total = calcDailySleepDebt(saturday) + calcDailySleepDebt(sunday) + 
    calcDailySleepDebt(monday) + calcDailySleepDebt(tuesday) + calcDailySleepDebt(wednesday) + 
    calcDailySleepDebt(thursday) + calcDailySleepDebt(friday);
    return total;
}

//Print Results
const calcSleepDebt = () => {
    let hoursSlept = getTotalHoursSlept();
    let sleepDebt = calcTotalSleepDebt();
    let weeklySleep = getIdealHours(age) * 7;

    console.log(`Last week you slept a total of ${hoursSlept} hours`);
    console.log(`You should've slept ${weeklySleep} hours`);
    if (sleepDebt < 0) {
        console.log(`Your sleep debt is: ${sleepDebt} hours`);
    }
    else if (sleepDebt === 0) {
        console.log(`You don't have any sleep debt! Perfect sleeping habits`);
    }
    else {
        console.log(`Congratulations! You have a sleep surplus of ${sleepDebt} hours`);
    }
}


//User Input
let age = 80; //Must be Positive integer
//Enter the hours you slept each day this week
let saturday = 7;
let sunday = 10;
let monday = 8;
let tuesday = 7;
let wednesday = 8;
let thursday = 8;
let friday = 8;


//This function runs the program
calcSleepDebt();
let money, time;

function start() {
    time = prompt("Введите дату в формате YYYY-MM-DD", undefined);
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", undefined);
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        a = prompt("Введите обязательную статью расходов", ""),
            b = prompt("Во сколько обойдется?", "");

        if (typeof (a) === 'string' && (typeof (a) != null) && (typeof (b) != null && a != '' && a.length < 50)) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            console.log("bad result");
            i--;
        }
    }
}

chooseExpenses();

console.log(appData);

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюждет на один день равен " + appData.moneyPerDay + "рублей");
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка")
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            persent = +prompt("Под какой процент?");
        appData.monthIncome = save / 100 / 128 * persent;
        alert("Доход в месяц с вашего депозита" + appData.monthIncome);

    }
}

checkSavings();

function chooseOptExpenses() {

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}

chooseOptExpenses();



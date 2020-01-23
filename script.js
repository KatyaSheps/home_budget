let money = prompt("Ваш бюджет на месяц?", undefined),
    time = prompt("Введите дату в формате YYYY-MM-DD", undefined);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let answerForFirstQuestion = prompt("Введите обязательную статью расходов в этом месяце", undefined),
    answerForSecondQuestion = prompt("Во сколько обойдется?", undefined),
    answerForThirdQuestion = prompt("Введите обязательную статью расходов в этом месяце", undefined),
    answerForFourthQuestion = prompt("Во сколько обойдется?", undefined);

appData.expenses.answerForFirstQuestion = answerForSecondQuestion;
appData.expenses.answerForThirdQuestion = answerForFourthQuestion;

alert("Бюждет на один день равен " + appData.budget/30 + "рублей");




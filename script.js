let money = prompt("Ваш бюджет на месяц?", undefined);
let time = prompt("Введите дату в формате YYYY-MM-DD", undefined);
console.log(money);
console.log(time)

let answerForFirstQuestion = prompt("Введите обязательную статью расходов в этом месяце", undefined);
let answerForSecondQuestion = prompt("Во сколько обойдется?", undefined);

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        answerForFirstQuestion : answerForSecondQuestion
    },
    optionalExpenses: {},
    income: [],
    savings: false
}
let result = (money - answerForSecondQuestion)/30;
alert("Бюждет на один день равен " + result + "рублей");




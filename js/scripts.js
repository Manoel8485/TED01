function getScore(score){
    let scoreFinal;
    if (score >= 90 && score <= 100){
        scoreFinal = "A";
    }else
    if (score >= 80 && score <= 89){
        scoreFinal = "B";
    }else
    if (score >= 70 && score <= 79){
        scoreFinal = "C";
    }else
    if (score >= 60 && score <= 69){
        scoreFinal = "D";
    }else
    if (score < 60 && score  >= 0){
        scoreFinal = "F";
    }
    return scoreFinal;
}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(80))
console.log(getScore(90))

// Fluxo d caixa
let family = {
    incomes : [2500, 3200, 250.43, 360.45],
    expenses : [320.34, 128.45, 176.86, 1450.00]
}
function sum(array){
    let total = 0;
    for(let value of array){
        total += value
    }
    return total;
}
function calculatBalance(){
    const calculateIncomes = sum(family.incomes) 
    const calculateExpenses = sum(family.expenses) 

    const total = calculateIncomes - calculateExpenses
    let balanceText = "Negativo"
    if (total >= 0) {
        balanceText = "Positivo"
    }
    console.log('Seu saldo é ${balanceText}: ${Total}')
}

calculatBalance();

// Celsius to Fahrenheit
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')    
    const fahrenheitExists = degree.toUpperCase().includes('F')    

    if (!celsiusExists && !fahrenheitExists) {
        throw new error('Grau não identificado')
    }

    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit -32) * 5/9;
    let degreeSign = 'C'

    if (celsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celcius) => celcius * 9/5 + 32;
        degreeSign = 'F'
    }

    return formula(updateDegree) + degreeSign
}

try {
    transformDegree('52f')
    transformDegree('52C')
} catch (error) {
    console.log(error)
}

// Buscando e encontrando dados do array
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];
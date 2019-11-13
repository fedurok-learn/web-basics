const arr = [
    {value: 100, type: 'USD'},
    {value: 215, type: 'EUR'},
    {value: 7, type: 'EUR'},
    {value: 99, type: 'USD'},
    {value: 354, type: 'USD'},
    {value: 12, type: 'EUR'},
    {value: 77, type: 'USD'},
];

const sumOfUSDLessThan100 = arr.filter(item => item.type == 'USD' && item.value < 100)
                               .reduce((accumulator, item) => item.value + accumulator, 0)
const doubledEur = arr.filter(item => item.type == 'EUR')
                      .map(item => item.value * 2)

console.log(sumOfUSDLessThan100)
console.log(doubledEur)
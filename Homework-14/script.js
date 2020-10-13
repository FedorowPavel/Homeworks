// первая задача
console.log('1 задание');

function compareNUmbers(x, y) {
    return x + y < 100;
}

var result = compareNUmbers(59, 3);

console.log('Результат сравнения - ' + result);





// вторая задача 
console.log('2 задание');

function countSeconds(hours, minutes) {
    return (hours * 3600) + (minutes * 60);
}

var result = countSeconds(1, 4);

console.log('Количество секунд - ' + result);





// третья задача 
console.log('3 задание');

function countTotalPoints(wins, draws, defeats) {
    return wins * 3 + draws * 1 + defeats * 0;
}

var result = countTotalPoints(3, 2, 1);

console.log('Команда набрала ' + result + ' очков');





// четвертая задача 
console.log('4 задание');

var x = 2132;
var y = 'volvo';

function createArray(arrayItem1, arrayItem2) {
    return [arrayItem1, arrayItem2];
}

var result = createArray(x, y);

console.log('Новый массив - ' + '[' + result + ']');








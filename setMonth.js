const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
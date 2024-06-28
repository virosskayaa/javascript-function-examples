const merge = (a, b) => [...a, ...b];
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const uniqueArr = (arr) => [...new Set(arr)];
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const merge = [...new Set([...a, ...b])];
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
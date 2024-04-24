const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
console.log(false === '0');
console.log( "A" - "B" + "2");
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const removeDuplicates = (arr) => [...new Set(arr)];
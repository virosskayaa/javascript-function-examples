console.log(1 +  -"1" + "2");
const apmRootPath = path.join(repositoryRootPath, 'apm');
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
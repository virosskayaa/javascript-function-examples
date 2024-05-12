const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const symbolsPath = path.join(buildOutputPath, 'symbols');
const resultingPromises = urls.map((url) => makHttpRequest(url));
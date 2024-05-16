const flattenedArray = arr => [].concat(...arr);
const merge = (a, b) => [...a, ...b];
const apmRootPath = path.join(repositoryRootPath, 'apm');
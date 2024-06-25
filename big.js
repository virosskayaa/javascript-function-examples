var regexp  = new RegExp('{{([^}]+)}}', 'g');
const flattenedArray = arr => [].concat(...arr);
const scriptRootPath = path.join(repositoryRootPath, 'script');
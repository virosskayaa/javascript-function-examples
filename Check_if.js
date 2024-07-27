const symbolsPath = path.join(buildOutputPath, 'symbols');
const randomString = () => Math.random().toString(36).slice(2);
const merge = [...new Set([...a, ...b])];
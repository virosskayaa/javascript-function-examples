var regexp  = new RegExp('{{([^}]+)}}', 'g');
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const isWeekday = (date) => date.getDay() % 6 !== 0;
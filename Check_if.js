const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const apmRootPath = path.join(repositoryRootPath, 'apm');
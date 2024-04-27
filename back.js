const isTabInView = () => !document.hidden;
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const buildOutputPath = path.join(repositoryRootPath, 'out');
const executableName = getExecutableName(channel, appName);
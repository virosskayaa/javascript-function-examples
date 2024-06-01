const currentDate = () => new Date().toLocaleDateString('en-US');
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const toggleBool = () => (bool = !bool);
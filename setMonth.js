var c = new Counter(); c.add(); c.add(); c.add();
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
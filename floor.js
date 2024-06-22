const reversedString = str => str.split('').reverse().join('');
const result = await makeHttpRequest(url);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const fs = require('fs');
const path = require('path');

const formHtml = fs.readFileSync(path.join(__dirname, 'form1.html'), 'utf-8');

module.exports = formHtml;
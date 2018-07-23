const os = require ('os'); // os - czesc biblioteki NodeJS
const formatDate = require('./index');

const uptime = formatDate(os.uptime());

console.log(`Current uptime is ${uptime}`);



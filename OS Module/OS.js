const OS = require("os");

//Get the os platform and user info
console.log("OS platform: ",OS.platform());
console.log("user: ",OS.userInfo());

//Get the OS architecture
console.log("CPU Architecture:",OS.arch());

//Get the free system memory
console.log("Free memory:" ,OS.freemem(),"bytes");

//Get the total memory
console.log("Total Memory:",OS.totalmem(),"bytes");

//Get the system uptime in seconds
console.log("System uptime:",OS.uptime(),"seconds");

//Get the home directory
console.log("Home Directory:",OS.homedir());

//Get the host name
console.log("Host Name:",OS.hostname());

//Get the network interface
console.log("Network Interface:",OS.networkInterfaces());

//Get the CPU information
console.log("CPU information:",OS.cpus());

//Get temporary directory
console.log("Temp dir:",OS.tmpdir());

//Get the operating system name
console.log("Operating system is:",OS.type());











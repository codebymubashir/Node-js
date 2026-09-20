//Import events class with pascal case 
const EventEmitter = require("events");

const emitter = new EventEmitter();


//Define an event listner
emitter.on("greet", ()=>{
    console.log("hello");
    
})
emitter.emit("greet")

//you can also pass the arguments
emitter.on("greet", (username,prof,age)=>{
    console.log(`hello my name is ${username} and my profession is ${prof} and my age is ${age}`);
    
})
emitter.emit("greet","mubashir","Full stack Dev","22")


//best idea to take a single object as an argument
emitter.on("greet", (arg)=>{
    console.log(`hello my name is ${arg.name} and my profession is ${arg.prof} and my age is ${arg.age}`);
    
})
emitter.emit("greet",{name:"mubashir",prof:"Full stack Dev",age:"22"})


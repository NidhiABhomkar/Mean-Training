var events=require('events');
var eventEmitter=new events.EventEmitter();

eventEmitter.on('say hiiiiii',function()
{
    console.log("Hiiii nidhiiiiiii");
});

eventEmitter.on('hello',function()
{
    console.log('hello............');
});

console.log("before say hiiiiii");
eventEmitter.emit('say hiiiiii');
console.log("after say hiiiiii");
console.log("before hello");
eventEmitter.emit('hello');
console.log("after hello");
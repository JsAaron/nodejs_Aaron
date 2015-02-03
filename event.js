var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('someEvent',function(){
	console.log(1111111)
})

emitter.on('someEvent',function(){
	console.log(22222222)
})

emitter.emit('someEvent',2222)
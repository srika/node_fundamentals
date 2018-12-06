var events = require('events').EventEmitter;

var em = new events();

//Subscribing the events
em.once('FirstEvent', function(){
    console.log('First Event is Subscribed');
})

em.on('SecondEvent', function(data){
    console.log('Message: '+data);
})


//Raising or Publishing the events
em.emit('FirstEvent');
em.emit('FirstEvent');
em.emit('SecondEvent', 'Second Event is Subscribed');
/*
    Node.js has a built in module "Events", where we can
    create-,fire-, and listen for- our own events.
    Like other module, to include the built-in event module
    use the require() method. In addition, all event properties and
    methods are an instance of an EventEmitter object. To be able to
    access these properties and methods, create an EventEmitter object.

    {
        var events = require('events');
        var eventEmitter = new events.EventEmitter();

    }
*/ 

    /* The EventEmitter object 
        We can assign event handlers to your own events with the
        EventEmitter object.
        In the program/example below we have created a function that
        will be executed when a "screen" event is fired.
        To fire an event, use the emit() method.
    */

        var events = require('events');
        var eventEmitter = new events.eventEmitter();

        //Create an event emitter
        var myEventHandler = function(){

            console.log('I hear a scream!');
        }
        //Assign the event handler to an event:
        eventEmitter.on('scream',myEventHandler);
        //Fire the scream event
        eventEmitter.emit('scream');
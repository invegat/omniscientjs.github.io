var EventEmitter = require("events").EventEmitter,
    React = require('react'),
    component = require('omniscient');

var Heading = require('./heading');

var events = new EventEmitter();
events.on('event', function (data) {
  console.log('Event!', data);
});


var h = Heading({ text: 'Click me, I fire events in the console.' }, { events: events });
// React.renderComponent(h, document.querySelector('body'));

module.exports = {
  name: 'events',
  component: function (structure) {
    return h;
  }
};

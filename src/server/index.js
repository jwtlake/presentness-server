'use strict';

/** Dependencies **/ 
var Hapi = require('hapi');
var routes = require(appRoot + '/src/server/routes');
var settings = require(appRoot + '/src/server/config/settings');

// New server instance
var server = new Hapi.Server();

// Configure connection
server.connection({
	port: settings.get('hapi:port')
});

// Add Routes 
server.route(routes);

// Start Server
server.start(function () {
	console.log('Server listening @ ' + server.info.uri);
});

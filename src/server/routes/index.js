'use strict';

/** Dependencies **/ 
var api = require(appRoot + '/src/server/routes/api.js');

/** Common Routes **/ 
var common = [
	{
		path: '/',
		method: 'GET',
		handler: function(request, reply){
			reply('What up!');
		}
	}
];

/** Collect Routes **/ 
var routes = common.concat(api);
// when adding more routes concat(api,ui,etc)

//** Export Routes **//
module.exports = routes;
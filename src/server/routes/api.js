'use strict';

/** Dependencies **/
var controllers = require(appRoot + '/src/server/controllers');

/** API Routes **/ 
var routes = [{
		path: '/api/devicelist',
		method: 'GET',
		handler: controllers.api.getDeviceList
	},{
		path: '/api/device/{id}',
		method: 'GET',
		handler: controllers.api.getDevice
	},{
		path: '/api/device/{id}',
		method: 'POST',
		handler: controllers.api.updateDevice
	},{
		path: '/api/init',
		method: 'GET',
		handler: controllers.init.init
	}
];

//** Exports **//
module.exports = routes;
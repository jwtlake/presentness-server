'use strict';

/** Dependencies **/
var dev_objects = require(appRoot + '/src/server/models/test-device-list.js'); 

/** API Routes **/ 
var routes = [
	{
		path: '/api/devicelist',
		method: 'GET',
		handler: getDeviceList
	},{
		path: '/api/device',
		method: 'GET',
		handler: getDevice
	},{
		path: '/api/device',
		method: 'POST',
		handler: postDevice
	}
];

/** Handlers **/ 
function getDeviceList(request, reply){
	reply(dev_objects);
};

function getDevice(request, reply){
	reply('Build me!');
};

function postDevice(request, reply){
	reply('Build me!');
};

// export routes
module.exports = routes;

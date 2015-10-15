'use strict';

/** Dependencies **/
var models = require(appRoot + '/src/server/models');
var dev_objects = require(appRoot + '/src/server/models/test-device-list.js'); 

/** API Routes **/ 
var routes = [
	{
		path: '/api/devicelist',
		method: 'GET',
		handler: getDeviceList
	},{
		path: '/api/device/{id}',
		method: 'GET',
		handler: getDevice
	},{
		path: '/api/device/{id}',
		method: 'POST',
		handler: postDevice
	}
];

/** Handlers **/ 
function getDeviceList(request, reply){
	reply(dev_objects);
};

function getDevice(request, reply){
	var id = encodeURIComponent(request.params.id);
	console.log('Request status: id: '+ id);
	reply('Request status: id: '+ id);
};

function postDevice(request, reply){
	var id = encodeURIComponent(request.params.id);
	console.log('Id: '+ id + ' putObject:');
	console.log(request.payload);
	reply('Build me!');
};

//** Exports **//
module.exports = routes;
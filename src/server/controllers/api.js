'use strict';

//** Dependencies **//
var models = require(appRoot + '/src/server/models');

//** API Controllers **//
var controllers = {
	getDeviceList: function(request, reply) {
		models.Device.getJoin({type: true}).run().then( function (devices) {
			reply(devices);
		}).error(reply);
	},
	getDevice: function(request, reply) {
		var id = encodeURIComponent(request.params.id); //before i had a if id null check but it doesnt seem to be possible to get this this point with a null. Is that correct? 
		models.Device.get(id).getJoin({type: true}).run().then( function(device) {
			reply(device);
		}).error(reply);	
	},
	updateDevice: function(request, reply) {
		//get device
		var id = encodeURIComponent(request.params.id);
		models.Device.get(id).run().then( function(device) {
			//update device --maybe add some validation here?
			device.isPresent = JSON.parse(request.payload.isPresent.toLowerCase());
			device.lastSeen = request.payload.lastSeen;
			device.ip = request.payload.ip;

			//save device
			device.save().then(function(result) {
				reply(result);
				console.log('Received new update for [' + device.alias+ '] isPresent:'+ device.isPresent);
			});
		}).error(reply);
	}
};

//** Exports **//
module.exports = controllers;

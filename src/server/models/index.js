'use strict';

//** Dependencies **//
var settings = require(appRoot + '/src/server/config/settings');
var thinky = require('thinky')(settings.get('thinky'));
var r = thinky.r;
var type = thinky.type;

//** Models **//
var Device = thinky.createModel('Device', {
	id: type.string(),
	typeId: type.string(),
	macAddress: type.string(),
	alias: type.string(),
	deviceName: type.string(),
	ip: type.string(),
	bluetoothID: type.string(),
	enabled: type.boolean(),
	isPresent: type.boolean(),
	lastSeen: type.date()
});

var Type = thinky.createModel('Type', {
	id: type.string(),
	name: type.string()
});

//** Relationships **// 

// All Devices have a Type
Device.belongsTo(Type, 'type', 'typeId', 'id');

//** Indexes **//
// Device.ensureIndex("id"); // overkill hah

//** Exports **//
module.exports = {
  Device: Device,
  Type: Type
};
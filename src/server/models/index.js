'use strict';

//** Dependencies **//
var thinky = require('thinky')
var r = thinky.r;

//** Models **//
var Device = thinky.createModel('Device', {
	id: type.string(),
	macAddress: type.string(),
	alias: type.string(),
	deviceName: type.string(),
	ip: type.string(),
	bluetoothID: type.string(),
	enabled: type.boolean(),
	isPresent: type.boolean(),
	lastSeen: type.date(),
	typeId: type.string()
});

var Type = thinky.createModel('Type', {
	id: type.string(),
	name: type.string()
});

//** Relationships **// 

// All Devices have a Type
Device.belongsTo(Type, "type", "typeId", "id");
Type.hasMany(Device, "devices", "id", "typeId");

//** Indexes **//
// overkill hah
Device.ensureIndex("id");
'use strict';

//** Dependencies **//
var api = require(appRoot + '/src/server/controllers/api');
var init = require(appRoot + '/src/server/controllers/init'); //debug

//** Controllers Array**//
var controllers = [];

/** Common Controllers **/ 
var common = {
	//maybe add something here
};

//** Collect Controllers **/ 
controllers['common'] = common;
controllers['api'] = api;
controllers['init'] = init;

//** Exports **//
module.exports = controllers;
'use strict';

// libary for settings
var nconf = require('nconf');

// example connection settings
var defaults = {
	hapi:{
		port: 3001
	},
	thinky:{
		host: 'localhost',
		port: '28015',
		db: 'presentness'
	},
	postgress:{
		host: 'localhost',
		port: '5432',
		user: 'postgres',
		password: 'da87bzZd',
		database: 'presentness'
	}
};

// set default settings
nconf.defaults(defaults);

// TODO# add enviorments and hidden connection strings

// export
module.exports = nconf;

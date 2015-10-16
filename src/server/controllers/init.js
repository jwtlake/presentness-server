'use strict';

//** Dependencies **//
var models = require(appRoot + '/src/server/models');

//** Init Controller -- Debug Only **//
var controllers = {
	init: function(request, reply) {
		
		//nice to add in delete everything but lazy..

		//types
		var phone = new models.Type({
			name: 'phone'
		});

		var tv = new models.Type({
			name: 'tv'
		});

		var button = new models.Type({
			name: 'button'
		});

		//devices
		var jonPhone = new models.Device({
			id: 'A4C361ECFD72',
			alias: 'Jonathan - Iphone',
			// typeId: 'b309ecbb-d460-449b-bcc7-71462e24283b',
			deviceName: 'JonathansiPhone',
			macAddress: 'A4:C3:61:EC:FD:72',
			bluetoothID: 'A4:C3:61:EC:FD:73',
			ip: '',
			enabled: true,
			isPresent: false,
			lastSeen: null
		});
		jonPhone.type = phone;
		jonPhone.saveAll();

		var madelinePhone = new models.Device({
			id: '98F1704FCD09',
			alias: 'Madeline - Galaxy S5',
			// typeId: 'b309ecbb-d460-449b-bcc7-71462e24283b',
			deviceName: 'android:ec0609178d2d5a2',
			macAddress: '98:F1:70:4F:CD:09',
			ip: '',
			enabled: true,
			isPresent: false,
			lastSeen: null
		});
		madelinePhone.type = phone;
		madelinePhone.saveAll();		

		var tvLG = new models.Device({
			id: '4C09D48DBB56',
			alias: 'Livingroom TV LG 55',
			// typeId: 'ec97c5ba-f71b-4274-bbb5-c9d7d441dcfc',
			deviceName: 'Unknown',
			macAddress: '4C:09:D4:8D:BB:56',
			ip: '',
			enabled: true,
			isPresent: false,
			lastSeen: null
		});
		tvLG.type = tv;
		tvLG.saveAll();
		
		var harmonyHub = new models.Device({
			id: '000420ED239C',
			alias: 'Harmony Hub',
			typeId: 'ec97c5ba-f71b-4274-bbb5-c9d7d441dcfc',
			deviceName: 'HarmonyHub',
			macAddress: '00:04:20:ED:23:9C',
			ip: '',
			enabled: true,
			isPresent: false,
			lastSeen: null
		});
		harmonyHub.type = tv;
		harmonyHub.saveAll();

		var amazonDash = new models.Device({
			id: '747548B1918D',
			alias: 'Amazon Dash Button',
			typeId: '949797c7-1b26-4d79-8974-0b24a687c0b0',
			deviceName: 'WICED DHCP Client',
			macAddress: '74:75:48:B1:91:8D',
			ip: '',
			enabled: true,
			isPresent: false,
			lastSeen: null
		});
		amazonDash.type = button;
		amazonDash.saveAll();

		reply('done');
		// .then(function(result) {
		// 	reply(result);
		// });
	}
};

//** Exports **//
module.exports = controllers;
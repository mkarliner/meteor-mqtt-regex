Package.describe({
  name: 'mkarliner:mqtt-regex',
  version: '0.0.6',
  // Brief, one-line summary of the package.
  summary: 'Converts MQTT topic with parameters into regular express.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/mkarliner/meteor-mqtt-regex',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
	"mqtt-regex": "1.0.2",
});

Package.onUse(function(api) {
  api.addFiles('browserRegex.js');
//  api.export("mqttregex");
  api.versionsFrom('1.0.3.1');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mkarliner:mqtt-regex');
  api.addFiles('mkarliner:mqtt-regex-tests.js');
});



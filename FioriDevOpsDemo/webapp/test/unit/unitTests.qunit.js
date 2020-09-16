/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"saptw/FioriDevOpsDemo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

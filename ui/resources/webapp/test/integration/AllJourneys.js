jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Clusters in the list
// * All 3 Clusters have at least one Users

sap.ui.require([
	"sap/ui/test/Opa5",
	"live5/ui/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"live5/ui/test/integration/pages/App",
	"live5/ui/test/integration/pages/Browser",
	"live5/ui/test/integration/pages/Master",
	"live5/ui/test/integration/pages/Detail",
	"live5/ui/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "live5.ui.view."
	});

	sap.ui.require([
		"live5/ui/test/integration/MasterJourney",
		"live5/ui/test/integration/NavigationJourney",
		"live5/ui/test/integration/NotFoundJourney",
		"live5/ui/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});
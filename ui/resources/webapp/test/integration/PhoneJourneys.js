jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"live5/ui/test/integration/NavigationJourneyPhone",
		"live5/ui/test/integration/NotFoundJourneyPhone",
		"live5/ui/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});
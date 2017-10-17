sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("live5.uita.controller.View1", {
		onRefresh: function() {
			this.getView().byId("D3Chart").doRefresh();
			this.byId("pullToRefresh").hide();
		},
		onSentimentSelect: function(evt) {
			this.getView().byId("D3Chart").setSentiment(evt.getSource().getSelected());
			this.getView().byId("D3Chart").setType("");
			this.getView().byId("D3Chart").doRefresh();
		}

	});
});
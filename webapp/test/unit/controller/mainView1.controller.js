/*global QUnit*/

sap.ui.define([
	"fragment/controller/mainView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("mainView1 Controller");

	QUnit.test("I should test the mainView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

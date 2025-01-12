sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
], (Controller, Fragment) => {
    "use strict";

    return Controller.extend("fragment.controller.mainView1", {
        onInit() {
        },
        onPress() {
            var oview = this.getView();
            if (!this.byId('iddialog')) {
                Fragment.load({
                    name: "fragment.fragments.main",
                    Controller: this,
                    id: oview.getId()
                }).then(function (oDialog) {
                    oDialog.open();

                });
            }
            else {
                this.byId('iddialog').open();
            }
        },
        onclose() {
            this.byId('iddialog').close();
        }
    });
});
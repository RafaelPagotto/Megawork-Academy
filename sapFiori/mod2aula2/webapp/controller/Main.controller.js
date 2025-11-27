sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("megaacademy.mod2aula2.controller.Main", {
        onInit() {
            //let oModelLocal = new JSONModel();
            let oModelGlobal = this.getOwnerComponent().getModel();
            oModelGlobal.loadData("https://swapi.dev/api/people/");
            //this.getView().setModel(oModelLocal);
        },
        onBuscarPersonagem:function(oEvent){
            //this.getView().byId("stepInput").getValue();
            let inputPersonagem = oEvent.getParameter("value");
            this.getOwnerComponent().getModel().loadData("https://swapi.dev/api/people/" + inputPersonagem);
        }
    });
});
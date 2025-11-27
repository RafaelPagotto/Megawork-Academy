sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller) => {
    "use strict";

    return Controller.extend("megaacademy.mod2handson.controller.Main", {
        onInit() {
            let oGlobalModel = this.getOwnerComponent().getModel();
            oGlobalModel.loadData("https://swapi.dev/api/films");
        },

        //desafio formatar data
        formatarData(dataOriginal){
            if(!dataOriginal) return "";
            let parteData = dataOriginal.split("-");
            if(parteData.length !== 3) return dataOriginal;
            return parteData[2] + "/" + parteData[1] + "/" + parteData[0];
        }
    });
});
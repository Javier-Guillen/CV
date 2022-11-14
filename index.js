const enums = require("./enums.js")
const results = require("./geofences.js")



console.log("Hola");
var geofences = results.results.features;

for (let geofenceJSON of geofences) {

    let revision = enums.revision.NO;

    let uom = "FT";
    let lowerLimit = 0;
    let lowerRef = "AGL";
    let upperLimit = 99900;
    let upperRef = "AMSL";

    console.log("PRUEBA - geofenceJSON.attributes.NIVEL_INF",geofenceJSON.attributes.NIVEL_INF)
    console.log("PRUEBA - geofenceJSON.attributes.NIVEL_SUP",geofenceJSON.attributes.NIVEL_SUP)
    

    // PARSING NIVEL_INF AND NIVEL_SUP
    if (geofenceJSON.attributes.NIVEL_INF && geofenceJSON.attributes.NIVEL_INF != null && geofenceJSON.attributes.NIVEL_SUP && geofenceJSON.attributes.NIVEL_SUP != null) {
        //NIVEL INF
        if (geofenceJSON.attributes.NIVEL_INF == "SFC") {
            lowerLimit = 0;
            lowerRef = "AMSL";
        } else {
            if (geofenceJSON.attributes.NIVEL_INF.includes("//") || geofenceJSON.attributes.NIVEL_INF.includes(";")) {
                revision = enums.revision.YES;
                modificationMessage += " NIVEL_INF: " + geofenceJSON.attributes.NIVEL_INF + "/";
            } else {
                let words = geofenceJSON.attributes.NIVEL_INF.split(" ");

                if (words.length > 2) {
                    revision = enums.revision.YES;
                    modificationMessage += " NIVEL_INF: " + geofenceJSON.attributes.NIVEL_INF + "/";
                } else {
                    var altitudeLower = words[0].match(/\d+/g);
                    if (altitudeLower && altitudeLower[0]) {
                        lowerLimit = altitudeLower[0];
                    } else {
                        lowerLimit = 0;
                    }
                    var dimLower = words[0].match(/[a-zA-Z]+/g);
                    if (dimLower && dimLower[0]) {
                        switch (dimLower[0]) {
                            case "ft":
                                uom = "FT";
                                break;
                            case "m":
                                uom = "M";
                                break;
                            case "FL":
                                uom = "FT";
                                lowerRef = "AMSL";
                                lowerLimit *= 100;
                        }
                    } else {
                        uom = "FT";
                    }

                    if (words[1]) {
                        switch (words[1]) {
                            case "AGL":
                                lowerRef = "AGL";
                                break;
                            case "AMSL":
                            case "ALT":
                                lowerRef = "AMSL";
                        }
                    } else {
                        if (dimLower && dimLower[0] && dimLower[0] != "FL") {
                            revision = enums.revision.YES;
                            modificationMessage += " NIVEL_INF: " + geofenceJSON.attributes.NIVEL_INF + "/";
                        }
                    }
                }
            }
        }

        // NIVEL_SUP
        if (geofenceJSON.attributes.NIVEL_SUP == "UNL") {
            upperLimit = 99900;
            upperRef = "AMSL";
            if (uom == "M") {
                upperLimit = Math.round(upperLimit / constants.FOOTS_IN_METER);
            }
        } else {
            if (geofenceJSON.attributes.NIVEL_SUP.includes("//") || geofenceJSON.attributes.NIVEL_SUP.includes(";")) {
                revision = enums.revision.YES;
                modificationMessage += " NIVEL_SUP: " + geofenceJSON.attributes.NIVEL_SUP + "/";
            } else {
                let words = geofenceJSON.attributes.NIVEL_SUP.split(" ");

                if (words.length > 2) {
                    revision = enums.revision.YES;
                    modificationMessage += " NIVEL_SUP: " + geofenceJSON.attributes.NIVEL_SUP + "/";
                } else {
                    var altitudeUpper = words[0].match(/\d+/g);
                    if (altitudeUpper && altitudeUpper[0]) {
                        upperLimit = altitudeUpper[0];
                    } else {
                        upperLimit = 99900;
                        upperRef = "AMSL";
                    }
                    var dimUpper = words[0].match(/[a-zA-Z]+/g);
                    if (dimUpper && dimUpper[0]) {
                        switch (dimUpper[0]) {
                            case "ft":
                                uom = "FT";
                                break;
                            case "m":
                                uom = "M";
                                break;
                            case "FL":
                                uom = "FT";
                                upperRef = "AMSL";
                                upperLimit *= 100;
                        }
                    } else {
                        uom = "FT";
                    }

                    if (words[1]) {
                        switch (words[1]) {
                            case "AGL":
                                upperRef = "AGL";
                                break;
                            case "AMSL":
                            case "ALT":
                                upperRef = "AMSL";
                        }
                    } else {
                        if (dimUpper && dimUpper[0] && dimUpper[0] != "FL") {
                            revision = enums.revision.YES;
                            modificationMessage += " NIVEL_SUP: " + geofenceJSON.attributes.NIVEL_SUP + "/";
                        }
                    }
                }
            }
        }
    }
    console.log("PRUEBA - uom: ",uom);
}
console.log("PRUEBA - adios")
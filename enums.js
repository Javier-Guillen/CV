/**
 * @fileoverview Module that contains enums declaration.
 * @author David C. 
 */

/**
 * Enum for geofence geo metric types
 * @enum {String}
 */
 module.exports.GeoType = {
    "Circle":"Circle",
    "Polygon":"Polygon",
    "Corridor":"Corridor"
}

/**
 * Enum for geofence type
 * @type {String}.
 */
module.exports.Type = { //From AIRMAP
    "Park": "Park",
    "PowerPlant": "PowerPlant",
    "Heliport": "Heliport",
    "School": "School",
    "Prison": "Prison",
    "TemporartFlightRestriction": "TemporartFlightRestriction",
    "Airport": "Airport",
    "ControlledAirspace": "ControlledAirspace",
    "SpecialUseAirspace": "SpecialUseAirspace",
    "Fire": "Fire",
    "Wildfire": "Wildfire",
    "Hospital": "Hospital",
    "Emergency": "Emergency",
    "DenselyPopulatedRegion": "DenselyPopulatedRegion" //Only for Japan
}

// =============================================================================
// ED269 enums
// =============================================================================

/**
 * Enum for flightplans authorization status
 * @type {String}.
 */
module.exports.AuthStatus = {
    "PENDING_AUTH": "PENDING_AUTH",
    "AUTHORIZED": "AUTHORIZED"
}

/**
 * Enum for Type
 * @type {enum}.
 */
 module.exports.ED269Type = {
    "COMMON": "COMMON",
    "CUSTOMIZED": "CUSTOMIZED"
}

/**
 * Enum for restriction
 * @type {enum}.
 */
 module.exports.ED269Restriction = {
    "PROHIBITED": "PROHIBITED",
    "REQ_AUTHORISATION": "REQ_AUTHORISATION",
    "CONDITIONAL":"CONDITIONAL",
    "NO_RESTRICTION":"NO_RESTRICTION"
}

/**
 * Enum for reason
 * @type {enum}.
 */
 module.exports.ED269Reason = {
    "AIR_TRAFFIC":"AIR_TRAFFIC",
    "SENSITIVE":"SENSITIVE",
    "PRIVACY":"PRIVACY",
    "POPULATION":"POPULATION",
    "NATURE":"NATURE",
    "NOISE":"NOISE",
    "FOREIGH_TERRITORY":"FOREIGH_TERRITORY",
    "EMERGENCY":"EMERGENCY",
    "OTHER":"OTHER"
}

/**
 * Enum for YES or NO
 * @type {enum}.
 */
 module.exports.ED269Boolean = {
    "YES": "YES",
    "NO": "NO"
}

/**
 * Enum for height reference
 * @type {enum}.
 */
 module.exports.ED269Heightreference = {
    "AGL": "AGL",
    "AMSL": "AMSL"
}

/**
 * Enum for geometry type
 * @type {enum}.
 */
 module.exports.ED269HorizontalProjectionType = {
    "Circle": "Circle",
    "Polygon": "Polygon"
}

/**
 * Enum for dimension unit 
 * @type {enum}.
 */
 module.exports.ED269Uomdimensions = {
    "FT": "FT",
    "M": "M"
}

/**
 * Enum for porpuse
 * @type {enum}.
 */
 module.exports.ED269Purpose = {
    "AUTHORIZATION": "AUTHORIZATION",
    "NOTIFICATION": "NOTIFICATION",
    "INFORMATION": "INFORMATION"
}

/**
 * Enum for week day
 * @type {enum}.
 */
 module.exports.ED269Day = {
    "MON": "MON",
    "TUE": "TUE",
    "WED": "WED",
    "THU": "THU",
    "FRI": "FRI",
    "SAT": "SAT",
    "SUN": "SUN",   
    "ANY": "ANY"  
}

/**
 * Enum for INSIGNIA state of revision
 * @type {enum}.
 */
 module.exports.revision = {
    "YES": "YES",
    "NO": "NO", 
    "VALIDATION PENDING": "VALIDATION PENDING"
}

/**
 * Enum for INSIGNIA type
 * @type {enum}.
 */
 module.exports.insigniaType = {
    "AERODROME": "AERODROME",
    "ATZ": "ATZ", 
    "HYDROPLANE_MILITAR_BASE": "HYDROPLANE_MILITAR_BASE",
    "CTR": "CTR",
    "D_DANGER": "D_DANGER",
    "FIZ": "FIZ",
    "HELIPORT": "HELIPORT",
    "LFR": "LFR",
    "P_PROHIBITED": "P_PROHIBITED",
    "PROHIBITED_VFR": "PROHIBITED_VFR",
    "R_RESTRICTED": "R_RESTRICTED",
    "AIRFIELD": "AIRFIELD",
    "TRA": "TRA",
    "TSA": "TSA",
    "NATURE": "NATURE",
    "FIFTEEN": "15"
}

/**
 * Enum for week day
 * @type {enum}.
 */
 module.exports.notamType = {
    "N": "N",
    "R": "R",
    "C": "C"
}

// =============================================================================
// METAR enums
// =============================================================================

/**
 * Enum for element
 * @type {enum}.
 */
 module.exports.elementName = {
    "Q": "Q"
}

/**
 * Enum for report type
 * @type {enum}.
 */
 module.exports.reportType = {
    "METAR": "METAR",
    "SPECI": "SPECI"
}
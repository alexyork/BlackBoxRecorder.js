var recorder = require("../src/recorder");
var myModule = require("./myModule");

// Call the method before turning the recorder on
var result1 = myModule.badlyWrittenMethod("aParam", "anOtherParam", 2, 3, "this is foo");
//console.log("Result before recording: " + JSON.stringify(result1));

// Turn the recorder on
recorder.record(myModule, "badlyWrittenMethod");
var result2 = myModule.badlyWrittenMethod("aParam", "anOtherParam", 2, 3, "this is foo");
//console.log("Result after recording: " + JSON.stringify(result2));
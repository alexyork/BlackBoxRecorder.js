var recorder = require("../src/recorder");
var complexModule = require("./someComplexModule");

// Call the method before turning the recorder on
var result1 = complexModule.paramCocktail("aParam", "anOtherParam", 2, 3, "this is foo", { bar: "baz" });
//console.log("Result before recording: " + JSON.stringify(result1));

// Turn the recorder on
recorder.record(complexModule, "paramCocktail");
var result2 = complexModule.paramCocktail("aParam", "anOtherParam", 2, 3, "this is foo", { bar: "baz" });
//console.log("Result after recording: " + JSON.stringify(result2));
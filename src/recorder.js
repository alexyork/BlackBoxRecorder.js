var unitTestGenerator = require("./unitTestGenerator");

//
// Recorder
function record(objectToTrack, methodToTrack) {
    // Grab hold of the original method
    var originalMethod = objectToTrack[methodToTrack]; 

    // Stub the method in question
    objectToTrack[methodToTrack] = function() {
        // Actually call the original method, with the real arguments
        var argsArray = Array.prototype.slice.call(arguments);
        var actualResult = originalMethod.apply(objectToTrack, argsArray);
    
        // Create a unit test, before returning the result
        unitTestGenerator.generate(methodToTrack, arguments, actualResult);
        return actualResult;
    };
}

module.exports = {
    record: record
}
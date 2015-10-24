// 
// Unit test generator
function generate(methodToTrack, args, actualResult) {
    var indent = "    ";
    var unitTest = indent +
        "it('should result in a specific output, given some specific inputs (id:[RANDOM_TIME])', function() {" + "\n" + indent + indent +
            "var result = objectToTest.[METHOD_NAME]([ARGUMENTS]);" + "\n" + indent + indent +
            "expect(result).to.deep.equal([ACTUAL_RESULT]);" + "\n" + indent +
        "});";

    var argsArray = Array.prototype.slice.call(args);
    var argsString = JSON.stringify(argsArray);
    argsString = argsString.slice(1, argsString.length-1); // remove leading '[' and trailing ']'
    
    unitTest = unitTest.replace("[RANDOM_TIME]", new Date().getTime());
    unitTest = unitTest.replace("[METHOD_NAME]", methodToTrack);
    unitTest = unitTest.replace("[ARGUMENTS]", argsString);
    unitTest = unitTest.replace("[ACTUAL_RESULT]", JSON.stringify(actualResult));
    
    // For now, just print a test to the console
    console.log(unitTest);
}

module.exports = {
    generate: generate
};
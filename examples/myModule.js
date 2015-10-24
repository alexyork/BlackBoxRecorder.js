function badlyWrittenMethod(aParam, anOtherParam, x, y, foo) {
    return {
        params: (aParam + "_" + anOtherParam),
        result: (x + y),
        foo: foo
    };
}

module.exports = {
    badlyWrittenMethod: badlyWrittenMethod
};
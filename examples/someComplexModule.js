function paramCocktail(aParam, anOtherParam, x, y, foo) {
    return {
        params: (aParam + "_" + anOtherParam),
        result: (x + y),
        foo: foo
    };
}

module.exports = {
    paramCocktail: paramCocktail
};

function x() {
    return 0;
}
BlackBoxRecorder.js
===================

This is currently just a proof-of-concept.

What is this?
-------------

Sometimes you see a messy function and you think "man, I have to clean this up!". But then you notice there are
no unit tests, which makes you scared to start cleaning up the bad code, because you might break it without knowing.

BlackBoxRecorder.js attempts to record all calls to `yourModule.methodWithReallyBadCode` (record the input parameters
and the return value) and then generate unit tests for you based on that.

You can go from having 0 unit tests to having 10 unit tests in moments. And *then* you can clean up that bad code with
a little more confidence.


Example
-------

So let's say you have a badly written method you would like to refactor, and it is called like this:

```
var result = myModule.badlyWrittenMethod("aParam", "anOtherParam", 2, 3, "this is foo");
// result: {"params":"aParam_anOtherParam","result":5,"foo":"this is foo"}
```

All you need to do is record `myModule.badlyWrittenMethod` like so:

```
var recorder = require("blackboxrecorder");
recorder.record(myModule, "badlyWrittenMethod");

var result = myModule.badlyWrittenMethod("aParam", "anOtherParam", 2, 3, "this is foo");
```

After that, `BlackBoxRecorder.js` will generate unit tests, because it will have recorded all of the input/outputs
to `myModule.badlyWrittenMethod`. Here is an example of an auto-generated unit test:

```

it('should result in a specific output, given some specific inputs', function() {
    var result = objectToTest.badlyWrittenMethod("aParam","anOtherParam",2,3,"this is foo");
    expect(result).to.deep.equal({"params":"aParam_anOtherParam","result":5,"foo":"this is foo"});
});
```

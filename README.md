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

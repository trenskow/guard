@trenskow/guard
----

A simple library for guarding against conditions

# Usage

````javascript
const guard = require('@trenskow/guard')('my-application');

guard(myCondition, 'My condition failed.');

// If `!myCondition` is true, then process exits with message logged.
````

# LICENSE

See LICENSE


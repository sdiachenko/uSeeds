'use strict';

describe('Component: FooComponent', function() {
  // load the controller's module
  beforeEach(module('uSeedsApp.foo'));

  var FooComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    FooComponent = $componentController('foo', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

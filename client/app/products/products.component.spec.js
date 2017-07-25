'use strict';

describe('Component: ProductsComponent', function() {
  // load the controller's module
  beforeEach(module('uSeedsApp.products'));

  var ProductsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ProductsComponent = $componentController('products', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

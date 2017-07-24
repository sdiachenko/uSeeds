'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('products', {
      url: '/products',
      template: '<products></products>'
    })
    .state('newProduct', {
      url: '/products/new',
      templateUrl: 'app/products/templates/product-new.html',
      controller: 'ProductNewCtrl'
    })

    .state('viewProduct', {
      url: '/products/:id',
      templateUrl: 'app/products/templates/product-view.html',
      controller: 'ProductViewCtrl'
    })

    .state('editProduct', {
      url: '/products/:id/edit',
      templateUrl: 'app/products/templates/product-edit.html',
      controller: 'ProductEditCtrl'
    });
}

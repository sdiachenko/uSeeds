'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './products.routes';
import ProductFactory from './products.service';

export class ProductsComponent {
  /*@ngInject*/
  constructor($scope, ProductFactory) {
    'ngInject';
    $scope.products = ProductFactory.query();
  }
}

export class ProductViewCtrl {
  /*@ngInject*/
  constructor($scope, ProductFactory, $stateParams, $state) {
    'ngInject';
    console.log('ProductViewCtrl', $stateParams.id);
    $scope.product = ProductFactory.get({id: $stateParams.id});
    $scope.deleteProduct = function() {
      ProductFactory.delete($scope.product);
      $state.go('products');
    };
  }
}

export class ProductNewCtrl {
  /*@ngInject*/
  constructor($scope, $state, ProductFactory) {
    'ngInject';
    $scope.product = {}; // create a new instance
    $scope.addProduct = function() {
      ProductFactory.create($scope.product);
      $state.go('products');
    };
  }
}

export class ProductEditCtrl {
  /*@ngInject*/
  constructor($scope, $state, $stateParams, ProductFactory) {
    'ngInject';
    $scope.product = ProductFactory.get({id: $stateParams.id});

    $scope.editProduct = function() {
      ProductFactory.update($scope.product);
      $state.go('products');
    };
  }
}

export default angular.module('uSeedsApp.products', [uiRouter])
  .config(routes)
  .component('products', {
    template: require('./templates/product-list.html'),
    controller: ProductsComponent,
    controllerAs: 'productsCtrl'
  })
  .factory('ProductFactory', ProductFactory)
  .controller('ProductNewCtrl', ProductNewCtrl)
  .controller('ProductViewCtrl', ProductViewCtrl)
  .controller('ProductEditCtrl', ProductEditCtrl)
  .name;

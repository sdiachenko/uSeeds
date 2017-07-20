'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('foo', {
      url: '/foo',
      template: '<foo></foo>'
    });
}

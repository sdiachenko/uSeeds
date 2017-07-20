'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './foo.routes';

export class FooComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('uSeedsApp.foo', [uiRouter])
  .config(routes)
  .component('foo', {
    template: require('./foo.html'),
    controller: FooComponent,
    controllerAs: 'fooCtrl'
  })
  .name;

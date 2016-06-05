'use strict';

angular.module('imkerium', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url:'/',
      views: {
        'header': {
          templateUrl : 'views/header.html',
        },
        'content': {
          templateUrl : 'views/about.html',
          controller  : 'AboutController'
        },
      }
    })
    .state('app.products', {
      url:'products',
      views: {
        'content@': {
          templateUrl : 'views/products.html',
          controller  : 'ProductController'
        }
      }
    })
    .state('app.contact', {
      url:'contact',
      views: {
        'content@': {
          templateUrl : 'views/contact.html',
          controller  : 'ContactController'
        }
      }
    });

  $urlRouterProvider.otherwise('/');
});

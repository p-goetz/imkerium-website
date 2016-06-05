'use strict';

angular.module('imkerium')
  .constant('baseUrl', 'http://localhost:3000/')
  .constant('beekeeperId', '575430b3b67ed6d602afa0b4')
  .service('beekeeperFactory', ['$resource', 'baseUrl', 'beekeeperId', function($resource, baseUrl, beekeeperId) {
    this.getInformations = function() {
      return $resource(baseUrl + 'beekeeper/' + beekeeperId);
    };

    this.getProducts = function() {
      return $resource(baseUrl + 'beekeeper/' + beekeeperId + '/products');
    };

    this.getContact = function() {
      return $resource(baseUrl + 'beekeeper/' + beekeeperId + '/contact');
    };

    this.sendMessage = function() {
      return $resource(baseUrl + 'message/');
    };
  }]);

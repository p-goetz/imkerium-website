'use strict';

angular.module('imkerium')
  .controller('AboutController', ['$scope', 'beekeeperFactory', function($scope, beekeeperFactory) {
    beekeeperFactory.getInformations().get(
      function(response) {
        $scope.beekeeper = response.name;
        $scope.informations = response.information;
      },
      function(response) {
        $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
      });
  }])
  .controller('ProductController', ['$scope', 'beekeeperFactory', function($scope, beekeeperFactory) {
    beekeeperFactory.getProducts().get(
      function(response) {
        $scope.beekeeper = response.name;
        $scope.products = response.products;
      },
      function(response) {
        $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
      });
  }])
  .controller('ContactController', ['$scope', 'beekeeperFactory', function($scope, beekeeperFactory) {
    beekeeperFactory.getContact().get(
      function(response) {
        $scope.contact = response;
      },
      function(response) {
        $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
      });

    $scope.sendFeedback = function() {
      $scope.feedback.to = $scope.contact.email;
      console.log($scope.feedback);
      beekeeperFactory.sendMessage().save($scope.feedback);

      $scope.feedback = { from: '', subject: '', message: '' };
      $scope.feedbackForm.$setPristine();
    };
  }]);

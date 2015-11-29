angular.module("socially").controller("FileDetailsCtrl", function ($scope, $stateParams, $meteor) {
  $scope.file = $meteor.object(Files, $stateParams.fileId);
});
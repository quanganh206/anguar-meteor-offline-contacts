angular.module("socially").controller("ContactsListCtrl", function ($scope, $meteor) {
  $scope.contacts = $meteor.collection(Contacts);
 
  $scope.remove = function (file) {
    $scope.files.splice($scope.files.indexOf(file), 1);
  };
 
  $scope.removeAll = function () {
    $scope.files.remove();
  };
});
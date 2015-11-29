angular.module("socially").config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
 
  $stateProvider
    .state('contacts', {
      url: '/contacts',
      templateUrl: 'client/contacts/views/contacts-list.html',
      controller: 'ContactsListCtrl'
    })
    .state('contactDetails', {
      url: '/contacts/:contactId',
      templateUrl: 'client/contacts/views/contact-details.html',
      controller: 'ContactDetailsCtrl'
    });
    
  $urlRouterProvider.otherwise("/contacts");
});
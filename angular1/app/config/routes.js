angular.module('primeiraApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: 'dashboard/dashboard.html'
    }).state('billingCycle', {
      url: '/billingCycles?page',
      templateUrl: 'billingCycles/tabs.html'
    })
    
    $urlRouterProvider.otherwise('/dashboard')
  }
])
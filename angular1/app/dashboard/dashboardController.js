(function(){
  angular.module('primeiraApp').controller('DashboardCtrl', [
    '$http',
    DashboardController
  ])

  function DashboardController($http) {
    //vm siginifica viewModel para seguir as boas práticas do angular 
    const vm = this
    vm.getSummary = function() {
      const url = 'http://localhost:3003/api/billingSummary'
      $http.get(url).then(function(response) {
        const {credit = 0, debt = 0} = response.data
        vm.credit = credit
        vm.debt = debt
        vm.total = credit - debt
      })
    }

    vm.getSummary()
  }
})()

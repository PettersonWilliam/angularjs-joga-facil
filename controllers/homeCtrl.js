myApp.controller('HomeCtrl', ['$scope', 'MatchsService', '$rootScope', '$state', function($scope, MatchsService, $rootScope ,$state) {
    const tableList = () => {
        MatchsService.list().then(response => {
            $scope.matchs = response.data.matchs;
        }).catch(error => {
            alert('Algo de Eraado aconteceu');
        }); 
    }

    tableList();
}]);


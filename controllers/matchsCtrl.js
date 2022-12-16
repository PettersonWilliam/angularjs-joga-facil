myApp.controller('MatchsCtrl', ['$scope',  '$stateParams', '$state', '$timeout', 'MatchsService', function($scope, $stateParams, $state, $timeout, MatchsService) {
    $scope.match = {};
    
    const updateMatch = () => {
    
        const options = {
            data : {
                date: $scope.match.date,
                started_at: $scope.match.started_at,
                end_at: $scope.match.end_at,
                team_amount: $scope.match.team_amount
            },
            id: $stateParams.matchId
        };

        if(!options.data.date || !options.data.started_at){
            alert('Por favor preencha os campos ABAIXO');
            return;
        }
    
        if(!options.data.end_at || !options.data.team_amount) {
            alert('Por favor preencha os campos em branco');
            return;
        }

        MatchsService.edit(options).then(response => {
            $state.go('home');
        }).catch(error => {
            alert('Erro ao atualizar partida.');
        });

    };

    const createMatch = () => {
        const data = {
            date: $scope.match.date,
            started_at: $scope.match.started_at,
            end_at: $scope.match.end_at,
            team_amount: $scope.match.team_amount
        };

        MatchsService.createMatch(data).then(response => {
            $state.go('home');
        }).catch(error => {
            alert('Erro ao Criar Partida');
        })
    }

    const getDateHour = date => {
        const today = new Date(date);
        return new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), 0);
    };

    const init = () => {
        const id = $stateParams.matchId;
        if (id) {

            MatchsService.find(id).then(response => {
                $scope.match.date = new Date(response.data.match.date);
                $scope.match.started_at = getDateHour(response.data.match.started_at);
                $scope.match.end_at = getDateHour(response.data.match.end_at);
                $scope.match.team_amount = response.data.match.team_amount;
            }).catch(error => {
                alert('Algo de Errado Aconteceu');
            })
        }
        
    }
    
    const submit = () => {

        const data = {
            date: $scope.match.date,
            started_at: $scope.match.started_at,
            end_at: $scope.match.end_at,
            team_amount: $scope.match.team_amount
        };

        if(!data.date || !data.started_at){
            alert('Por favor preencha os campos ABAIXO');
            return;
        }

        if(!data.end_at || !data.team_amount) {
            alert('Por favor preencha os campos em branco');
            return;
        }

        const matchId = $stateParams.matchId;

        if (matchId) {
            updateMatch();
        } else {
            createMatch();
        }
     }
    
    init();
    $scope.submit = submit;
    
}]);
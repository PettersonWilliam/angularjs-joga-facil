myApp.controller("matchParticipantsCtrl", ['$scope', 'MatchParticipantsService', function($scope, MatchParticipantsService) {
    const listAll = () => {
        MatchParticipantsService.listAll().then(response => {
            $scope.matchParticipants = response.data.matchsParticipants;
        }).catch(error => {
            alert('Error ao listar Participante da parida');
        });
    };

    const deleteMatchParticipant = id => {
        MatchParticipantsService.deleteMatchParticipant(id).then(response => {
            listAll();
        }).catch(error => {
            alert('Erro ao deletar Participante da partida');
        })
    };

    $scope.deleteMatchParticipant = deleteMatchParticipant;

    listAll();
}]);
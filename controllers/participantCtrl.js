myApp.controller("participantCtrl", ['$scope', 'ParticipantsService', function ($scope, ParticipantsService ) {
    const list = () => {
        ParticipantsService.list().then(response => {
            $scope.participantName = response.data
        }).catch(error => {
            alert('Erro ao listar Participantes');
        });
    }

    const deleteParticipant = id => {
        ParticipantsService.deleteParticipant(id).then(response => {
            list();
        }).catch(error => {
            alert('Erro ao deletar partida');
        })
    }
    
    $scope.deleteParticipant = deleteParticipant;

    list();
}]);
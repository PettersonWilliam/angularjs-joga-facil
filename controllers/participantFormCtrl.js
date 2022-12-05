myApp.controller("participantFormCtrl", ['$scope', '$stateParams', 'ParticipantsService','$state', function($scope, $stateParams, ParticipantsService, $state) {
    const editParticipant = () => {
        const options = {
            data: {
                name:$scope.participantName
            },
            id: $stateParams.participantId
        }
        ParticipantsService.editParticipant(options).then(response => {
            $state.go('participant');
        }).catch(error => {
            alert('Erro ao Editar Participante');
        });

    };

     const init = () => {
        const id = $stateParams.participantId;
        if(id) {
            ParticipantsService.find(id).then(response => {
                $scope.participantName = response.data.name;
            }).catch(error => {
                alert('Nenhum participante encontrado');
            });
        }
    };

    const createParticipant = () => {
        
    }

    const submit = () => {
        const participantId = $stateParams.participantId;

        if (participantId) {
            editParticipant();
        }
    };


    init();

    $scope.submit = submit;
}]);
myApp.controller("participantFormCtrl", ['$scope', '$stateParams', 'ParticipantsService', '$state', 'PositionsService', function($scope, $stateParams, ParticipantsService, $state, PositionsService) {
    $scope.participant = {};

    const editParticipant = () => {
        const options = {
            data: {
                name: $scope.participant.name
            },
            id: $stateParams.participantId
        };

        ParticipantsService.editParticipant(options).then(response => {
            $state.go('participant');
        }).catch(error => {
            alert('Erro ao Editar Participante');
        });

    };

     const init = () => {
        const id = $stateParams.participantId;

        PositionsService.listAll().then(response => {
            $scope.positions = response.data.position;
            if (id) {
                ParticipantsService.find(id).then(response => {
                    $scope.participant = response.data;
                    $scope.participant.born = new Date(response.data.born); 
                    $scope.positionId = response.data.position_id;
                }).catch(error => {
                    alert('Nenhum participante encontrado');
                });
            }
        }).catch(error => {
            alert('Erro ao listar Posição');
        });  
    };

    const createParticipant = () => {
        const data = {
            name: $scope.participant.name,
            born: new Date($scope.participant.born),
            position_id: $scope.positionId,
            number: $scope.participant.number
        }; 

        ParticipantsService.createParticipant(data).then(response => {
            $state.go('participant');
        }).catch(error => {
            alert('Erro ao criar participante');
        })
    }

    const submit = () => {

        const data = {
            name: $scope.participant.name,
            born: new Date($scope.participant.born),
            position_id: $scope.positionId,
            number: $scope.participant.number
        }; 

        if (!data.name || !data.born || !data.position_id || !data.number ) {
            alert('Ops! Preencha os campos abaixo');
            return;
        }

        const participantId = $stateParams.participantId;

        if (participantId) {
            editParticipant();
        }else {
            createParticipant();
        }
    };

    init();

    $scope.submit = submit;
}]);
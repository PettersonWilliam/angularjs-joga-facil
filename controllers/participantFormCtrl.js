myApp.controller("participantFormCtrl", ['$scope', '$stateParams', 'ParticipantsService', '$state', 'PositionsService', function($scope, $stateParams, ParticipantsService, $state, PositionsService) {
    const editParticipant = () => {
        const options = {
            data: {
                name: $scope.participantName
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

        if(id) {
            ParticipantsService.find(id).then(response => {
                $scope.participantName = response.data.name;
                $scope.participantBorn = new Date(response.data.born);
                $scope.positionId = response.data.position_id;
            }).catch(error => {
                alert('Nenhum participante encontrado');
            });
        }
        //list de positions

        PositionsService.listAll().then(response => {
            $scope.positions = response.data.position;
        }).catch(error => {
            alert('Erro ao listar Posição');
        })
    };

    const createParticipant = () => {

        const data = {
            name: $scope.participant.name,
            born: new Date($scope.participant.born),
            position_id: $scope.positionId,
            number: $scope.participant.number 
        } 
        // list ParticipantIds

        ParticiapntsService.list().then(response => {
            $scope.participantIds = response.data.participant_ids
        }).catch(error => {
            alert('Erro ao listar o id participante');
        })

        ParticipantsService.createParticipant(data).then(response => {
            $state.go('participant');
        }).catch(error => {
            alert('Erro ao criar participante');
        })
    }

    const submit = () => {
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
myApp.controller("matchParticipantsFormCtrl", ['$q', '$scope', '$stateParams', 'MatchParticipantsService', '$state', 'MatchsService','ParticipantsService', function($q, $scope, $stateParams, MatchParticipantsService, $state, MatchsService, ParticipantsService) {
    const editMatchParticipant = () => {
        const options = {
            data: {
                match_id: $scope.matchId,
                participant_id: $scope.participantId,
                is_confirmed: $scope.is_confirmed === 'SIM' ? true : false,
                gols: $scope.gols,
                rate: $scope.rate
            },
            id: $stateParams.matchParticipantId
        }
    
        MatchParticipantsService.edit(options).then(response => {
            $state.go('MatchParticipants');
        }).catch(error => {
            alert('Erro ao Editar Participante da partida');
        })
    };
    
    const init = () => {
        const id = $stateParams.matchParticipantId;

        const promisses = [MatchsService.list(),  ParticipantsService.list()];

        $q.all(promisses).then(response => {            
            $scope.matchs = response[0].data.matchs;
            $scope.participants = response[1].data.participants;

            if (id) {
                MatchParticipantsService.find(id).then(response => {
                    $scope.rate = response.data.matchParticipant.rate;
                    $scope.gols = response.data.matchParticipant.gols;
                    $scope.matchId = response.data.matchParticipant.match_id;
                    $scope.participantId = response.data.matchParticipant.participant_id;
                    $scope.is_confirmed = response.data.matchParticipant.is_confirmed ? 'SIM' : 'NÃO';
                }).catch(error => {
                    alert('Não é possível listar Participante da Partida');
                });
            }
        }).catch(error => {
            alert(error.data.message);
        })
    };
    
    const createMatchParticipant = () => {
        const data = {
            match_id: $scope.matchId,
            participant_id: $scope.participantId,
            is_confirmed: $scope.is_confirmed === 'SIM' ? true : false,
            gols: $scope.gols,
            rate: $scope.rate,
        }
    
        MatchParticipantsService.store(data).then(response => {
            $state.go('matchParticipants');
        }).catch(error => {
            alert(error.data.message);
        });
    };
    
    const submit = () => {
        const matchParticipantId = $stateParams.matchParticipantId;
    
        if (matchParticipantId) {
            editMatchParticipant();
        } else {
            createMatchParticipant();
        }
    };

    init();

    $scope.submit = submit;
}]);
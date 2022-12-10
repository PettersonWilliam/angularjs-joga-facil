myApp.controller('MatchsCtrl', ['$scope',  '$stateParams', '$state', '$timeout', 'MatchsService','ParticipantsService', function($scope, $stateParams, $state, $timeout, MatchsService, ParticipantsService) {
    $scope.match = {};
    
    const updateMatch = () => {
        const options = {
            data : {
                date: $scope.match.date,
                started_at: $scope.match.started_at,
                end_at: $scope.match.end_at,
                status: $scope.match.status
            },
            id: $stateParams.matchId
        };

        MatchsService.edit(options).then(response => {
            $state.go('home');
        }).catch(error => {
            alert('Erro ao atualizar partida.');
        });
    };

    const createMatch = () => {
        const participantesSelecinados = $scope.participants.filter(participant => participant.selected);
        const idsDosSelecionados = participantesSelecinados.map(participant => participant.id);

        console.log(idsDosSelecionados);

        const data = {
            date: $scope.match.date,
            started_at: $scope.match.started_at,
            end_at: $scope.match.end_at,
            team_amount: $scope.match.team_amount,
            participant_ids: idsDosSelecionados
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
            $scope.loading = true;

            MatchsService.find(id).then(response => {
                $timeout(() => {
                    $scope.match.date = new Date(response.data.match.date);
                    $scope.match.started_at = getDateHour(response.data.match.started_at);
                    $scope.match.end_at = getDateHour(response.data.match.end_at);
                })

            }).catch(error => {
                alert('Algo de Errado Aconteceu');
            }).finally(() => {
                $scope.loading = false;
            });
        }
        ParticipantsService.list().then(response => {
            $scope.participants = response.data.map(participant => {
                return {
                    ...participant,
                    selected: false
                };
            });
        }).catch(error => {
            alert('Erro ao listar participanteeeeeeeee');
        })
    }
    const addParticipant = () => {
        $scope.participants.forEach(participant => {
            console.log($scope.participantId);
            if (participant.id === ~~$scope.participantId) {
                participant.selected = true;
            }
        });

        $scope.participantId = '';
    };

    const removeParticipant = participant => {
        participant.selected = false;
    };
    
    const submit = () => {
        const matchId = $stateParams.matchId;

        if (matchId) {
            updateMatch();
        } else {
            createMatch();
        }
     }
    
    init();
    $scope.submit = submit;
    $scope.addParticipant = addParticipant;
    $scope.removeParticipant = removeParticipant;
}]);
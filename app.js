//importando o angular definindo ela com o angular.module e definindo tbm os pacotes que irao seer usados como ui.router.
const myApp = angular.module("jogaFacilApp", ["ui.router"]); // ui.router -- BIBLIOTECA - LIB

myApp.config(function ($stateProvider, $httpProvider) {
    $httpProvider.interceptors.push('BearerTokenInterceptor');

    $stateProvider.state({
        name: "login", // nome do estado, estando ativo
        url: "", // nesta url sendo ativa
        templateUrl: "views/login.html", // o html que vai ser renderizado
        controller: "LoginCtrl", // ultilizando o controller , onde fica toda nossa logica
        onEnter: checkRedirect
    });

    $stateProvider.state({
        name: "home",
        url: "/home",
        templateUrl: "views/home.html",
        controller: "HomeCtrl",
        onEnter: isAuthorized
    });

    $stateProvider.state({
        name: "matchForm",
        url: "/match/?{matchId}",
        templateUrl: "views/matchForm.html",
        controller: "MatchsCtrl",
        onEnter: isAuthorized
    });

    $stateProvider.state({
        name: "position",
        url: "/position",
        templateUrl: "views/position.html",
        controller: "positionCtrl",
        onEnter: isAuthorized
    });

    $stateProvider.state({
        name: "positionForm",
        url: "/position/?{positionId}",
        templateUrl: "views/positionForm.html",
        controller: "positionFormCtrl",
        onEnter: isAuthorized
    });

    $stateProvider.state({
        name: "participant",
        url: "/participant",
        templateUrl: "views/participant.html",
        controller: "participantCtrl",
        onEnter: isAuthorized
    });

    $stateProvider.state({
        name: "participantForm",
        url: "/participant/?{participantId}",
        templateUrl: "views/participantForm.html",
        controller: "participantFormCtrl",
        onEnter: isAuthorized
    });

    $stateProvider.state({
        name: "matchParticipants",
        url: "/matchParticipant",
        templateUrl: "views/matchParticipants.html",
        controller: "matchParticipantsCtrl",
        onEnter: isAuthorized
    });

    $stateProvider.state({
        name: "matchParticipantForm",
        url: "/matchParticipant/?{matchParticipantId}",
        templateUrl: "views/matchParticipantsForm.html",
        controller: "matchParticipantsFormCtrl",
        onEnter: isAuthorized
    });

    $stateProvider.state({
        name: "top3",
        url: "/top-3",
        templateUrl: "views/top3.html",
        controller: "top3Ctrl",
        onEnter: isAuthorized
    });
    
});

const isAuthorized = ($state, $rootScope) => {
    const isLogged = localStorage.getItem("token");

    if (!isLogged) {
      $state.go("login");
      return;
    }

    $rootScope.isLogged = true;
};

const checkRedirect = ($state, $rootScope) => {
    const isLogged = localStorage.getItem("token");

    if (!isLogged) {
        return;
    }

    $state.go("home");
}
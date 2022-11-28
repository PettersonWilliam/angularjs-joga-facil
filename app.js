//importando o angular definindo ela com o angular.module e definindo tbm os pacotes que irao seer usados como ui.router.
const myApp = angular.module("jogaFacilApp", ["ui.router"]); // ui.router -- BIBLIOTECA - LIB

myApp.config(function ($stateProvider, $httpProvider) {
    $httpProvider.interceptors.push('BearerTokenInterceptor');

    $stateProvider.state({
        name: "login", // nome do estado, estando ativo
        url: "", // nesta url sendo ativa
        templateUrl: "views/login.html", // o html que vai ser renderizado
        controller: "LoginCtrl" // ultilizando o controller , onde fica toda nossa logica
    });

    $stateProvider.state({
        name: "home",
        url: "/home",
        templateUrl: "views/home.html",
        controller: "HomeCtrl"
    });
});
// Javascript

var app = angular.module("ngApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "Home.html"
    })
    .when("/about", {
        templateUrl : "about.html"
    })
    .when("/faq", {
        templateUrl : "faq.htm"
    })
    .when("/contect", {
        templateUrl : "contect.htm"
    });
});
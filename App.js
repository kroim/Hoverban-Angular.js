/**
 * Created by Administrator on 6/14/2017.
 */



var mainApp = angular.module("App",['ngRoute']);

mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // Home
        .when("/", {templateUrl: "view/nav_view/hoverban.html", controller: "PageCtrl"})
        // Pages
        .when("/signin", {templateUrl: "view/header_view/signin.html", controller: "PageCtrl"})
        .when("/signup", {templateUrl: "view/header_view/signup.html", controller: "PageCtrl"})
        .when("/collections", {templateUrl: "view/header_view/collections.html", controller: "PageCtrl"})
        .when("/cart", {templateUrl: "view/header_view/cart.html", controller: "PageCtrl"})
        .when("/home", {templateUrl: "view/home.html", controller: "PageCtrl"})
        .when("/hoverban", {templateUrl: "view/nav_view/hoverban.html", controller: "PageCtrl"})
        .when("/men", {templateUrl: "view/nav_view/men.html", controller: "PageCtrl"})
        .when("/women", {templateUrl: "view/nav_view/women.html", controller: "PageCtrl"})
        .when("/designer", {templateUrl: "view/nav_view/designer.html", controller: "PageCtrl"})
        .when("/fittingRoom", {templateUrl: "view/nav_view/fittingRoom.html", controller: "PageCtrl"})
        .when("/sales", {templateUrl: "view/nav_view/sales.html", controller: "PageCtrl"});
        // else 404
        //.otherwise("/404", {templateUrl: "view/header_view/404.html", controller: "PageCtrl"});
}]);

mainApp.controller('BlogCtrl', function (/* $scope, $location, $http */) {
    console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
mainApp.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");
});
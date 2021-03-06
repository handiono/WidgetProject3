﻿"use strict";

angular.module('app').config(['$routeProvider', function ($routeProvider) {

    var routes = [
        {
            url: '/dashboard',
            config: {
                template: '<wwa-dashboard></wwa-dashboard>'
            }
        },
        {
            url: '/guides',
            config: {
                template: '<wwa-guides></wwa-guides>'
            }
        },
        {
            url: '/appmanagement',
            config: {
                templateUrl: '/javascripts/angularproject/partialviews/appmanagement.html'
            }
        },
        {
            url: '/appcomposer',
            config: {
                templateUrl: '/javascripts/angularproject/partialviews/appcomposer.html'
            }
        },
        {
            url: '/prevpage/:id',
            config: {
                templateUrl: '/javascripts/angularproject/partialviews/previewpage.html'
            }
        },
        {
            url: '/usermanagement',
            config: {
                templateUrl: '/javascripts/angularproject/partialviews/usermanagement.html'
            }
        },
    ];

    routes.forEach(function (route) {
        $routeProvider.when(route.url, route.config);
    });

    $routeProvider.otherwise({ redirectTo: '/appmanagement' });

}]);
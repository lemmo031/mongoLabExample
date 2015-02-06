/**
 * Created by lemmo031 on 2/6/15.
 */
'use strict';

console.log("GPA.js loaded!");

angular.module("appModule")
    .config(function($stateProvider){
        $stateProvider
            .state('GPA', {
                url: '/GPA',
                templateUrl: 'views/GPA/GPA.html',
                controller: 'GPACtrl'
            });
    });
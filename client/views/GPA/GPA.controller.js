/**
 * Created by lemmo031 on 2/6/15.
 */

'use strict';

angular.module("appModule")
    .controller('GPACtrl', function($scope, $http){
        console.log("GPA controller loaded!");

        $scope.classField = "";
        $scope.creditsField = "";
        $scope.gradeField = "";
        $scope.pointsEarned = 0;
        $scope.totalCredits = 0;
        $scope.output = 0;

        //// Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        $scope.GPAdata = [];

        $scope.updateGPA = function (){
            $http.get('api/GPA/').success(function(database) {
                $scope.GPAdata = database;
                $scope.output = $scope.calculateGPA($scope.GPAdata);
            });

        };

        $scope.updateGPA();

        $scope.addClass = function(){
            if(!$scope.isNotEmpty($scope.classField)) {
                alert("You Should Enter A Class Name!");
                return;
            }
            if (!$scope.isPositive($scope.creditsField)) {
                alert("Class Credits Must Be Above ZER0");
                return;
            }
            if (!$scope.isValidLetterGrade($scope.gradeField)) {
                alert("Must Enter A Valid Class Grade");
                return;
            }
            $scope.gradeField = $scope.gradeField.toUpperCase(); // This converts grade field to an upper-case letter for consistency
            $http.post('api/GPA/', {class: $scope.classField, credits: $scope.creditsField, grade: $scope.gradeField}).success(function(){
                $scope.updateGPA();
            });

            $scope.classField = "";
            $scope.creditsField = "";
            $scope.gradeField = "";

        };

        $scope.removeData = function(index){
            $http.delete('/api/GPA/' + $scope.GPAdata[index]._id).success(function(){
                $scope.updateGPA();
            });
        };

        $scope.isPositive = function(number){
            return number > 0;
        }

        $scope.isNotEmpty = function(text){
            return text != "";
        }

        $scope.isValidLetterGrade = function(text){
            switch (text) {
                case "A":
                case "a":
                case "B":
                case "b":
                case "C":
                case "c":
                case "D":
                case "d":
                case "F":
                case "f":
                    return true;
                default:
                    return false;
            }
        }

        // This assumes the argument is a capital letter.
        $scope.letterToNum = function(letter){
            letter = letter.toUpperCase();
            switch(letter) {
                case "A":
                    return 4.0;
                case "B":
                    return 3.0;
                case "C":
                    return 2.0;
                case "D":
                    return 1.0;
                default:
                    return 0.0;
            }
        }

        $scope.calculateGPA = function(array){
            if (array.length == 0) {
                return 0;
            }
            var pointsEarned = 0;
            var totalCredits = 0;
            for (var index = 0; index < array.length; index++) {
                var course = array[index];
                pointsEarned += course.credits * $scope.letterToNum(course.grade);
                totalCredits += course.credits;
            }
            return pointsEarned/totalCredits;
        }

    });
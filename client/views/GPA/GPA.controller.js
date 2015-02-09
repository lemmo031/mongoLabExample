/**
 * Created by lemmo031 on 2/6/15.
 */

'use strict';

angular.module("appModule")
    .controller('GPACtrl', function($scope, $http){
        console.log("GPA controller loaded!");

        $scope.classField = "a";
        $scope.creditsField = 3;
        $scope.gradeField = "A";
        $scope.heaviestPet = {text: "No Pet Found", weight: -1} //findHeaviestPet([]); // Initializes this field to have a default message.

        //// Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        $scope.GPAdata = [];

        $scope.updateDatabase = function(){
            $http.get('api/GPA/').success(function(database) {
                $scope.GPAdata = database;
               // $scope.heaviestPet = $scope.findHeaviestPet($scope.data);
            });

        };

        $scope.updateDatabase();

        $scope.addClass = function(){
            console.log("Hi from addClass")
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
            console.log("Almost To POST")
            $http.post('api/GPA/', {class: $scope.classField, credits: $scope.creditsField, grade: $scope.gradeField}).success(function(){
                $scope.updateDatabase();
                console.log("Ha, you can't see me!~")
            });

            $scope.classField = "";
            $scope.creditsField = "";
            $scope.gradeField = "";

        };

        $scope.removeData = function(index){
            $http.delete('/api/GPA/' + $scope.GPAdata[index]._id).success(function(){
                $scope.updateDatabase();
            });
        };

        $scope.cat = function(str1, str2){
            return str1 + str2;
        };

        $scope.itemsInList = function(){
            return $scope.data.length;
        };

        $scope.findHeaviestPet = function(arrayOfPets){
            //Handle case of empty array
            var heaviest = {text: "No Pets Found", weight: -1}
            for(var i = 0; i < arrayOfPets.length; i++){
                var currentPet = arrayOfPets[i];
                if (currentPet.weight > heaviest.weight) {
                    heaviest = currentPet;
                }
            }
            return heaviest;
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

        $scope.calculateGPA = function(pointsEarned, totalCredits){
            if (totalCredits == 0){
                return 0;
            }

            return pointsEarned/totalCredits;
        }
    });
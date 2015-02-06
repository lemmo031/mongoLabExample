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
        //$scope.heaviestPet = {text: "No Pet Found", weight: -1} //findHeaviestPet([]); // Initializes this field to have a default message.
        //
        //// Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        //$scope.data = [];
        //
        //$scope.getPets = function(){
        //    $http.get('api/pets').success(function(pets) {
        //        $scope.data = pets;
        //        $scope.heaviestPet = $scope.findHeaviestPet($scope.data);
        //    });
        //
        //};

        //$scope.getPets();

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
            $http.post('api/pets', {text: $scope.textField, weight: $scope.weightField}).success(function(){
                $scope.getPets();
            });

            $scope.classField = "";
            $scope.creditsField = "";
            $scope.gradeField = "";

        };

        //$scope.removeData = function(index){
        //    $http.delete('/api/pets/' + $scope.data[index]._id).success(function(){
        //        $scope.getPets();
        //    });
        //};
        //
        //$scope.cat = function(str1, str2){
        //    return str1 + str2;
        //};
        //
        //$scope.itemsInList = function(){
        //    return $scope.data.length;
        //};
        //
        //$scope.findHeaviestPet = function(arrayOfPets){
        //    //Handle case of empty array
        //    var heaviest = {text: "No Pets Found", weight: -1}
        //    for(var i = 0; i < arrayOfPets.length; i++){
        //        var currentPet = arrayOfPets[i];
        //        if (currentPet.weight > heaviest.weight) {
        //            heaviest = currentPet;
        //        }
        //    }
        //    return heaviest;
        //};
        //
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

    });
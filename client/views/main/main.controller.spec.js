'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });


    it('should return the weight of the heaviest pet from an array', function(){
        var petArray = [{text: "Brutus", weight: 1}, {text: "Fido", weight: 35}, {text: "Fluffy", weight: 20}];
        expect(scope.findHeaviestPet(petArray)).toEqual({text: "Fido", weight: 35});
    });

    it('should return the first pet tied for the heaviest weight from an array', function(){
        var petArray = [{text: "Brutus", weight: 1}, {text: "Pit Bull", weight: 35}, {text: "Fluffy", weight: 20}, {text: "Fido", weight: 35}];
        expect(scope.findHeaviestPet(petArray)).toEqual({text: "Pit Bull", weight: 35});
    });

    it('should return No Pets Found with a weight of -1 when passed an empty array', function(){
        var petArray = [];
        expect(scope.findHeaviestPet(petArray)).toEqual({text: "No Pets Found", weight: -1});
    });

    it('testing isPositive', function(){
        expect(scope.isPositive(-1)).toEqual(false);
        expect(scope.isPositive(0)).toEqual(false);
        expect(scope.isPositive(1)).toEqual(true);
    });
});
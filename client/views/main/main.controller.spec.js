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

    // test for tied weights, just return the first found.
});
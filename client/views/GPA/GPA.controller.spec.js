/**
 * Created by lemmo031 on 2/6/15.
 */
'use strict';

//=== Testing GPACtrl =============================================
describe('Testing controller: GPACtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var GPACtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        GPACtrl = $controller('GPACtrl', {
            $scope: scope
        });
    }));

    it('testing isPositive', function(){
        expect(scope.isPositive(-1)).toEqual(false);
        expect(scope.isPositive(0)).toEqual(false);
        expect(scope.isPositive(1)).toEqual(true);
    });

    it('testing isNotEmpty', function(){
        expect(scope.isNotEmpty("Wow")).toEqual(true);
        expect(scope.isNotEmpty("")).toEqual(false);
        expect(scope.isNotEmpty("A")).toEqual(true);
    });

    it('testing isValidLetterGrade', function(){
        expect(scope.isValidLetterGrade("A")).toEqual(true);
        expect(scope.isValidLetterGrade("B")).toEqual(true);
        expect(scope.isValidLetterGrade("C")).toEqual(true);
        expect(scope.isValidLetterGrade("D")).toEqual(true);
        expect(scope.isValidLetterGrade("F")).toEqual(true);

        expect(scope.isValidLetterGrade("a")).toEqual(true);
        expect(scope.isValidLetterGrade("b")).toEqual(true);
        expect(scope.isValidLetterGrade("c")).toEqual(true);
        expect(scope.isValidLetterGrade("d")).toEqual(true);
        expect(scope.isValidLetterGrade("f")).toEqual(true);

        expect(scope.isValidLetterGrade("r")).toEqual(false);
        expect(scope.isValidLetterGrade("p")).toEqual(false);

    });

});

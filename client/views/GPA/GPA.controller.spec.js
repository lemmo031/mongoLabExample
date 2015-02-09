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

    it('letterToNum should return 4.0 for A', function(){
        expect(scope.letterToNum("A")).toEqual(4.0);
        expect(scope.letterToNum("a")).toEqual(4.0);
    });

    it('letterToNum should return 3.0 for B', function(){
        expect(scope.letterToNum("B")).toEqual(3.0);
        expect(scope.letterToNum("b")).toEqual(3.0);
    });

    it('letterToNum should return 2.0 for C', function(){
        expect(scope.letterToNum("C")).toEqual(2.0);
        expect(scope.letterToNum("c")).toEqual(2.0);
    });

    it('letterToNum should return 1.0 for D', function(){
        expect(scope.letterToNum("D")).toEqual(1.0);
        expect(scope.letterToNum("d")).toEqual(1.0);
    });

    it('letterToNum should return 0.0 for F or any other letter', function(){
        expect(scope.letterToNum("F")).toEqual(0.0);
        expect(scope.letterToNum("Z")).toEqual(0.0);
    });

    //Tests for CalculateGPA

    it('these results should yield 4.0', function(){
        var theArray = [{class: "TheBestClass", credits: 4, grade: "A"}, {class: "TheSecondBestClass", credits: 2, grade: "a"}];
        expect(scope.calculateGPA(theArray)).toBeCloseTo(4.0, 2); // This makes sure we have 2 decimal points of precision.
    })

    it('these results should yield 2.56', function(){
        var theArray = [{class: "TheThirdClass", credits: 4, grade: "A"}, {class: "TheFourthBestClass", credits: 4, grade: "a"}, {class: "TheWorstClass", credits: 5, grade: "F"}, {class: "TheSecondBestClass", credits: 3, grade: "b"}];
        expect(scope.calculateGPA(theArray)).toBeCloseTo(2.56, 2);
    })

    it('these results should yield 2.9', function(){
        var theArray = [{class: "TheClass", credits: 1, grade: "d"}, {class: "TheFourthClass", credits: 4, grade: "C"}, {class: "TheWorst", credits: 5, grade: "A"}];
        expect(scope.calculateGPA(theArray)).toBeCloseTo(2.9, 2);
    })

    it('these results should yield 0', function(){
        var theArray = [];
        expect(scope.calculateGPA(theArray)).toBeCloseTo(0, 5);
    })

});

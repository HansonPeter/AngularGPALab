var assert = require("assert");
require("../public/libs/angular-mocks/angular-mocks");

describe('filter', function(){
    beforeEach(angular.mock.module('todoApp'));
    //something is not quite right here, but I can't figure it out yet
    // (window, window.angular);   ReferenceError: window is not defined

    describe('reverse', function(){
        it('should reverse a string', inject(function(reverseFilter) {
            assert.equal(reverseFilter('ABCD'), 'DCBA');
        }))
    });
});


//****** Our Testing Attempts Start here! ******

// First test attempt based on Angular Documentation.
//var course = {letter: "", gradePoints: 0, credits: 0};
//var grade = {letter: "A-", gradePoints: 3.67};
//
//var DropdownGradeCtrl = new DropdownGradeCtrl(course, grade);
//
//DropdownGradeCtrl.selectGrade(course, grade);

// Now, course.letter should give A- and course.gradePoints should give 3.67.
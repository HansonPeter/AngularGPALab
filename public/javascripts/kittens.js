angular.module('kittensApp', ['ui.bootstrap']);
function CarouselDemoCtrl($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 500 + slides.length;
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/300',
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
    }
}

function DropdownCtrl($scope) {
    $scope.items = [
        'The first choice!',
        'And another choice for you.',
        'but wait! A third!'
    ];

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
        console.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
}

function DropdownGradeCtrl($scope) {
    $scope.statuses = {
        isopen1: false,
        isopen2: false,
        isopen3: false,
        isopen4: false,
        isopen5: false,
        isopen6: false,
        isopen7: false,
        isopen8: false
    };

    $scope.classes = [
        {letter: "", gradePoints: 0, credits: 0},
        {letter: "", gradePoints: 0, credits: 0},
        {letter: "", gradePoints: 0, credits: 0},
        {letter: "", gradePoints: 0, credits: 0}
    ];

    $scope.grades = [
        {letter: 'A', gradePoints: 4},
        {letter: 'A-', gradePoints: 3.67},
        {letter: 'B+', gradePoints: 3.33},
        {letter: 'B', gradePoints: 3},
        {letter: 'B-', gradePoints: 2.67},
        {letter: 'C+', gradePoints: 2.33},
        {letter: 'C', gradePoints: 2},
        {letter: 'C-', gradePoints: 1.67},
        {letter: 'D+', gradePoints: 1.33},
        {letter: 'D', gradePoints: 1},
        {letter: 'F', gradePoints: 0}
    ];

    $scope.credits = [
        0,
        1,
        2,
        3,
        4,
        5
    ];

    $scope.selectGrade = function(course, grade) {
        course.letter = grade.letter;
        course.gradePoints = grade.gradePoints;
    };

    $scope.selectCredit = function(course, credit) {
        course.credits = credit;
    };

    $scope.calculateGPA = function() {
        var GPA = 0;
        var totalCredits = 0;

        for (var i = 0; i < $scope.classes.length; ++i) {
            GPA += ($scope.classes[i].gradePoints * $scope.classes[i].credits);
            totalCredits += $scope.classes[i].credits;
        };

        if (totalCredits != 0) {
            return "Your estimated GPA:  " + (GPA / totalCredits);
        } else {
            return "You need to select courses and credits!";
        }

    };

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
        console.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
}
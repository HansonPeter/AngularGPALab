// Jacob Opdahl and Peter Hanson
// Lab 4
// Our controller code is in here.

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

// The control we made starts here. The rest came with the lab.
// We used the DropdownCtrl function above as a basis for our work.
function DropdownGradeCtrl($scope) {

    // Keeps track of the states of all the buttons independently
    // using data-binding from angular.
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

    // Each class corresponds to a row in the table for our calculator
    // and is updated using data-binding.
    // Note, we could've added buttons to allow users to add or remove buttons,
    // but we instead spent our time trying to help KK find a way to test Angular.
    // Plus, they can technically choose less than four courses by choosing 0 credits.
    // Also, four tends to be the average.
    $scope.classes = [
        {letter: "", gradePoints: 0, credits: 0},
        {letter: "", gradePoints: 0, credits: 0},
        {letter: "", gradePoints: 0, credits: 0},
        {letter: "", gradePoints: 0, credits: 0}
    ];

    // These are the possible grades we consider and their gradepoints.
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

    // Possible credits a course could have.
    // Selecting 0 is equivalent to taking one less class for calculation.
    $scope.credits = [
        0,
        1,
        2,
        3,
        4,
        5
    ];

    // Set the grade in classes[] when a grade is selected
    // from a dropdown.
    $scope.selectGrade = function(course, grade) {
        course.letter = grade.letter;
        course.gradePoints = grade.gradePoints;
    };

    // Same as previous but with credits.
    $scope.selectCredit = function(course, credit) {
        course.credits = credit;
    };

    // Uses the information in the classes array which has been updated
    // using data binding to calculate the GPA and instantly display it
    // using even more data-binding.
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

    // Came from the code we copied above.
    $scope.toggled = function(open) {
        console.log('Dropdown is now: ', open);
    };

    // Came from the code we copied above.
    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
}
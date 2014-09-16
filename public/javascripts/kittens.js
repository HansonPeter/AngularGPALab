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
        {letter: 'D-', gradePoints: .67},
        {letter: 'F', gradePoints: 0}
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
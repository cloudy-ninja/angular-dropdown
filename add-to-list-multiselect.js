emos.common.directive('addToListMultiselect', [
    function() {
        return {
            restrict: "E",
            scope: {
                ngDisabled: '=',
                label: "=",
                model: "=",
                onSelect: "&",
                onUnselect: "&"
            },
            templateUrl: "/js/common/select/add-to-list-multiselect.html",
            controller: [
                "$scope",
                function ($scope) {
                    $scope.addToListBox = function () {
                        $scope.model.select($scope.selectedItem);
                        $scope.onSelect();
                    };

                    $scope.removeFromSelectedList = function (item) {
                        $scope.model.unselect(item);
                        $scope.onUnselect();
                    };
                }
            ]
        };
    }
]);

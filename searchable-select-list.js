emos.common.directive('searchableSelectList', [
    function() {
        return {
            restrict: "E",
            scope: {
                model: "=",
                showInDropDown: "=?",
                label: "=",
                warningProperty: "=",
                onSelect: "&"
            },
            templateUrl: "/js/common/select/searchable-select-list.html",
            controller: [
                "$scope",
                function ($scope) {
                    $scope.showInDropDown = !!$scope.showInDropDown;
                    function _select(selectedItem) {
                        var changed = $scope.model.select(selectedItem);
                        if (changed) {
                            $scope.onSelect && $scope.onSelect();                            
                        }
                    }

                    $scope.select = function (selectedItem) {
                        _select(selectedItem);
                    };
                }
            ]
        };
    }
]);

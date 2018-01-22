/**
 * Created by seelee on 2018/1/16.
 */
angular.module("myApp")
.controller("cardCtrl", function ($scope, $state, $stateParams) {

    $scope.editInfo = function () {
        console.log(66);
        $state.go("cardEdit");
    };

    $scope.collectionInfo = function () {
        $state.go("collection");
    }


});
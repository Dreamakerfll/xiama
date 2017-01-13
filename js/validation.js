/**
 * Created by 方立力 on 2016/7/19.
 */
angular.module('myApp',[])
    .controller('MainController',function($scope){
        $scope.userdata={}
        $scope.submitForm = function()
        {
            console.log($scope.userdata);
            console.log("表单提交啦");
        }
    })
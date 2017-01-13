/**
 * Created by 方立力 on 2016/7/19.
 */
angular.module('myApp',[])
.controller('MainController',function($scope){
        $scope.userdata={userName:'123214我们',identityId:'350302199011241636'}
        $scope.submitForm = function()
        {
            console.log($scope.userdata);
            console.log("表单提交啦");
        }
    })

function showWait(id){
    $("#"+id+"_wait").show();
}

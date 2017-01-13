/**
 * Created by 方立力 on 2016/7/19.
 */
angular.module('myApp',[])
.controller('MainController',function($scope){
        $scope.userdata={userName:'kkkkk',identityId:'2332'}
        $scope.submitForm = function()
        {
            console.log($scope.userdata);
            console.log("表单提交啦");
        }
        $scope.init = function(name,id){
            $scope.userdata={userName:name,identityId:id};
            console.log($scope.userdata);
        }

    })

function showWait(id){
    $("#"+id+"_wait").show();
}



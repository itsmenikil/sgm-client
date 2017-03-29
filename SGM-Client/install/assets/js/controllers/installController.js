app.controller('install-ctrlr', ['$scope', 'installService',function($scope,installService) {
    
   
    $scope.uploadFile = function(){
               var file = $scope.StoreLogo;
               
               console.log('file is ' );
               console.dir(file);
               var uploadUrl = "localhost:8080/store";
            console.dir(uploadUrl);
               installService.uploadFileToUrl(file, uploadUrl);
    };
       
}]);
 
  angular
    .module('myApp')
    .controller('EditPermissionCtrl', ['$scope','$rootScope','$window','UserService',EditPermissionCtrl]);
  
  function EditPermissionCtrl(scope,rootScope,window,UserService) {
	  //	scope.client ={};
	  	//alert("hi");
	  	//alert(JSON.stringify(rootScope.cl));
	  	scope.permission=rootScope.cl;
	  	//alert(JSON.stringify(scope.role));
	  	scope.updatePermission=function(){
	  		//alert("in update permission function");
	  		var response=UserService.updatePermission(scope.permission);
	  		response
		      .then(function(resp) {
		    	  alert(resp.data.msg);
		       }, function() {
		         
		       });
	  		
	  	}
	  
 }

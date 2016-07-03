 
  angular
    .module('myApp')
    .controller('EditRoleCtrl', ['$scope','$rootScope','$window','UserService',EditRoleCtrl]);
  
  function EditRoleCtrl(scope,rootScope,window,UserService) {
	  //	scope.client ={};
	  	//alert("hi");
	  	//alert(JSON.stringify(rootScope.cl));
	  	scope.role=rootScope.cl;
	  	//alert(JSON.stringify(scope.role));
	  	scope.updateRole=function(){
	  		//alert("in update role function");
	  		var response=UserService.updateRole(scope.role);
	  		response
		      .then(function(resp) {
		    	  alert(resp.data.msg);
		       }, function() {
		         
		       });
	  		
	  	}
	  
 }

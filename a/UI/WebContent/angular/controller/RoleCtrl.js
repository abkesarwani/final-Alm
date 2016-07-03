 
  angular
    .module('myApp')
    .controller('RoleCtrl', ['$scope','$rootScope','$window','UserService',RoleCtrl]);
  
  function RoleCtrl(scope,rootScope,window,UserService) {
	  	scope.role = {};
		
		
		
		//Function used to add new location
		scope.addRole = function() {
				//alert(JSON.stringify(scope.role));
		      var response=UserService.addRole(scope.role);
		      
		      response
		      .then(function(resp) {
		    	  alert(resp.data.msg);
		       }, function() {
		         
		       });
		    };//End of function
  }

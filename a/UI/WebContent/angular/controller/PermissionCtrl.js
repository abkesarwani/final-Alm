 
  angular
    .module('myApp')
    .controller('PermissionCtrl', ['$scope','$rootScope','$window','UserService',PermissionCtrl]);
  
  function PermissionCtrl(scope,rootScope,window,UserService) {
	  	scope.permission = {};
	  	scope.list = ["data1","data2"];
	  	
	    scope.refresh= function(){
	    	UserService.showGroup().then(function(data){
	    		scope.list = data.data;
	    	},function(error){
	    		alert(error);
	    	})
	    
	    }
		//Function used to add new user 
	  	scope.addPermission = function() {
				
				//alert(JSON.stringify(scope.permission));
				
		      var response=UserService.newPermission(scope.permission);
		      
		      response
		      .then(function(resp) {
		    	  alert(resp.data.msg);
		    	  window.location.reload();
					// window.location.href = '#/office';
		       }, function() {
		         
		       });
		    
		    };//End of function
  }

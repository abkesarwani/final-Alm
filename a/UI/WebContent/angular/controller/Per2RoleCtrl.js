 
  angular
    .module('myApp')
    .controller('Per2RoleCtrl', ['$scope','$rootScope','$window','UserService',Per2RoleCtrl]);
  
  function Per2RoleCtrl(scope,rootScope,window,UserService) {
	  	scope.permission = {};
	  	scope.list = ["data1","data2"];
	  	scope.list1 = ["data1","data2"];
	    scope.refresh= function(){
	    	UserService.showPermission().then(function(data){
	    		scope.list = data.data;
	    	},function(error){
	    		alert(error);
	    	})
	    
	    }
	    scope.refresh1= function(){
	    	UserService.showRole().then(function(data){
	    		scope.list1 = data.data;
	    		
	    	},function(error){
	    		alert(error);
	    	})
	    
	    }
		//Function used to add new user 
	  	scope.addPermissionToRole= function() {
				
				//alert(JSON.stringify(scope.permission));
				
		      var response=UserService.assignPerm2Role(scope.permission);
		      
		      response
		      .then(function(data) {
		    	  alert(data.data.msg);
		    	  
				
		       }, function() {
		         
		       });
		    
		    };//End of function
  }

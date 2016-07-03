 
  angular
    .module('myApp')
    .controller('DisplayPermissionCtrl', ['$scope','$rootScope','$window','UserService',DisplayPermissionCtrl]);
  
  function DisplayPermissionCtrl(scope,rootScope,window,UserService) {
	  	scope.permissions = ["data1","data2"];

	    scope.refresh= function(){
	    	UserService.showAllPermissions().then(function(data){
	    		//alert(JSON.stringify(data.data));
	    		
	    		scope.permissions = data.data;
	    		
	    	},function(error){
	    		alert(error);
	    	})
	    
	    }
	    var data;
	    scope.edit=function(data){
	    	
	    	//alert(JSON.stringify(data));
	    	rootScope.cl=data;
	    	window.location.href="#/EditPermission"
	    }
	    
	    scope.inactive=function(data){
	    	
	    	//alert(data);
	    	var response=UserService.inactivePermission(data);
	    	response
		      .then(function(resp) {
		    	  alert(resp.data.msg);
		       }, function() {
		         
		       });
	    }
	  
	  
 }

 
  angular
    .module('myApp')
    .controller('DisplayRoleCtrl', ['$scope','$rootScope','$window','UserService',DisplayRoleCtrl]);
  
  function DisplayRoleCtrl(scope,rootScope,window,UserService) {
	  	scope.roles = ["data1","data2"];

	    scope.refresh= function(){
	    	UserService.showAllRoles().then(function(data){
	    		//alert(JSON.stringify(data.data));
	    		
	    		scope.roles = data.data;
	    		
	    	},function(error){
	    		alert(error);
	    	})
	    
	    }
	    var data;
	    scope.edit=function(data){
	    	
	    	//alert(JSON.stringify(data));
	    	rootScope.cl=data;
	    	window.location.href="#/EditRole"
	    }
	    
	    scope.inactive=function(data){
	    	
	    	//alert(data);
	    	var response=UserService.inactiveRole(data);
	    	response
		      .then(function(resp) {
		    	  alert(resp.data.msg);
		       }, function() {
		         
		       });
	    }
	  
	  
 }

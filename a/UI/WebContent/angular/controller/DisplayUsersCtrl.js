 
  angular
    .module('myApp')
    .controller('DisplayUsersCtrl', ['$scope','$rootScope','$window','UserService',DisplayUsersCtrl]);
  
  function DisplayUsersCtrl(scope,rootScope,window,UserService) {
	  	scope.users = ["data1","data2"];

	    scope.refresh= function(){
	    	UserService.showAllUsers().then(function(data){
	    		//alert(JSON.stringify(data.data));
	    		
	    		scope.users = data.data;
	    		
	    	},function(error){
	    		alert(error);
	    	})
	    
	    }
	    var data;
	    scope.edit=function(data){
	    	
	    	//alert(JSON.stringify(data));
	    	rootScope.cl=data;
	    	window.location.href="#/EditUser"
	    }
	    
	    scope.inactive=function(data){
	    	
	    	//alert(data);
	    	var response=UserService.inactiveUser(data);
	    	response
		      .then(function(resp) {
		    	  alert(resp.data.msg);
		    	  window.location.reload();
		       }, function() {
		         
		       });
	    }
	  
	  
 }

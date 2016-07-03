 
  angular
    .module('myApp')
    .controller('UserCtrl', ['$scope','$rootScope','$window','UserService',UserCtrl]);
  
  function UserCtrl(scope,rootScope,window,UserService) {
	  	scope.user = {};
	  	
	  	scope.roleList= function(){
	    	UserService.showRole().then(function(data){
	    		//alert(JSON.stringify(data));
	    		scope.list1 = data.data;
	    	},function(error){
	    		alert(error);
	    	})
	    
	    };
	    
	    scope.groupList= function(){
	    	UserService.showGroup().then(function(data){
	    		//alert(JSON.stringify(data));
	    		scope.list2 = data.data;
	    	},function(error){
	    		alert(error);
	    	})
	    
	    };
		
		//Function used to add new user 
	  	scope.addUser = function() {
				
				//alert(JSON.stringify(scope.user));
		      var response=UserService.newUser(scope.user);
		      
		      response
		      .then(function(resp) {
		    	  alert(resp.data.msg);
		    	  window.location.reload();
					// window.location.href = '#/office';
		       }, function() {
		         
		       });
		    
		    };//End of function
		    
		 
  }

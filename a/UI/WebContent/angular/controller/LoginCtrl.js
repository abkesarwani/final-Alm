 
  angular
    .module('myApp')
    .controller('LoginCtrl', ['$scope','$rootScope','$window','UserService',LoginCtrl]);
  
  function LoginCtrl(scope,rootScope,window,UserService) {
	  scope.submit=function(){
		 // alert(JSON.stringify(scope.user));
	  		var response=UserService.login(scope.user);
	  		response
		      .then(function(resp) {
		    	//  alert(JSON.stringify(resp.data));
		    	  if(resp.data.u_role=="admin")
		    		  {
		    		  window.location.href="#/admin";
		    		  }
		    	  else if(resp.data.u_status=="Inactive")
	    		  {
		    		  alert("Inactive User");
	    		  }
		    	  else  if(resp.data=="")
	    		  {
		    		  alert("Wrong Username or Password");
		    		  window.location.href="#/login";
	    		  }
		    	  else
		    		  {
		    	  rootScope.c1=resp.data;
		    	  window.location.href="#/user";
		    		  }
		       }, function() {
		         
		       });
	  		
	  	}
	  
 }

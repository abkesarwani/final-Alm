 
  angular
    .module('myApp')
    .controller('EditUserDetailsCtrl', ['$scope','$rootScope','$window','UserService',EditUserDetailsCtrl]);
  
  function EditUserDetailsCtrl(scope,rootScope,window,UserService) {
	  //	scope.client ={};
	  	//alert("hi");
	  //	alert(JSON.stringify(rootScope.c1));
	  	scope.user=rootScope.c1;
	  	//alert(JSON.stringify(scope.user));
	  	scope.updateUser=function(){
	  		//alert("in update user function");
	  		var response=UserService.updateUser(scope.user);
	  		response
		      .then(function(resp) {
		    	  alert(resp.data.msg);
		    	  rootScope.c1=scope.user;
		    	  window.location.href="#/user";
		    //	  rootScope.c1=scope.user;
		       }, function() {
		         
		       });
	  		
	  	}
	  
 }

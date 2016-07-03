 
  angular
    .module('myApp')
    .controller('EditUserCtrl', ['$scope','$rootScope','$window','UserService',EditUserCtrl]);
  
  function EditUserCtrl(scope,rootScope,window,UserService) {
	 
	  	//alert(JSON.stringify(rootScope.cl));
	  	scope.user=rootScope.cl;
	  	//alert(JSON.stringify(scope.user));
	  	scope.updateUser=function(){
	  		//alert("in update user function");
	  		var response=UserService.updateUser(scope.user);
	  		response
		      .then(function(resp) {
		    	  alert(resp.data.msg);
		    	window.location.href="#/seeAllUsers";
		       }, function() {
		         
		       });
	  		
	  	}
	  
 }

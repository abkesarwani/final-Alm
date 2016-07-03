 
  angular
    .module('myApp')
    .controller('GroupCtrl', ['$scope','$rootScope','$window','UserService',GroupCtrl]);
  
  function GroupCtrl(scope,rootScope,window,UserService) {
	  	scope.group = {};
		
		
		
		//Function used to add new location
		scope.addGroup = function() {
				//alert(JSON.stringify(scope.group));
		      var response=UserService.addGroup(scope.group);
		      
		      response
		      .then(function(resp) {
		    	  alert(resp.data.msg);
		       }, function() {
		         
		       });
		    };//End of function
  }

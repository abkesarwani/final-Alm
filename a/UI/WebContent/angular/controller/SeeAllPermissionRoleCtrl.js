 
  angular
    .module('myApp')
    .controller('SeeAllPermissionRoleCtrl', ['$scope','$rootScope','$window','UserService',SeeAllPermissionRoleCtrl]);
  
  function SeeAllPermissionRoleCtrl(scope,rootScope,window,UserService) {
	  	/*scope.client ={};
	  	alert("hi");
	  	alert(JSON.stringify(rootScope.cl));
	  	scope.client=rootScope.cl;*/
	  scope.list1=[];

	  scope.refresh1= function(){
		  UserService.showRole().then(function(resp){
	    	
	    		scope.list1= resp.data;
	    	
	    		
	    	},function(error){
	    		alert(error);
	    	})
	    
	    }
	  	    
	  
	  
	  
	  scope.sendgroups= function(val){
		  UserService.sendRoleName(val).then(function(data){
	    		scope.groups = data.data;
	    	},function(error){
	    		alert(error);
	    	})
	    
	    }
	    
	  
 
  }
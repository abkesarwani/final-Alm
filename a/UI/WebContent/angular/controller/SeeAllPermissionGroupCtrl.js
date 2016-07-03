 
  angular
    .module('myApp')
    .controller('SeeAllPermissionGroupCtrl', ['$scope','$rootScope','$window','UserService',SeeAllPermissionGroupCtrl]);
  
  function SeeAllPermissionGroupCtrl(scope,rootScope,window,UserService) {
	  	/*scope.client ={};
	  	alert("hi");
	  	alert(JSON.stringify(rootScope.cl));
	  	scope.client=rootScope.cl;*/
	  scope.list1=[];

	  scope.refresh1= function(){
		  UserService.showGroup().then(function(resp){
	    	
	    		scope.list1= resp.data;
	    	
	    		
	    	},function(error){
	    		alert(error);
	    	})
	    
	    }
	  	    
	  
	  
	  
	  scope.sendgroups= function(val){
		  UserService.sendGroupName(val).then(function(data){
	    		scope.groups = data.data;
	    		//alert(scope.groups);
	    	},function(error){
	    		alert(error);
	    	})
	    
	    }
	    
	  
 
  }
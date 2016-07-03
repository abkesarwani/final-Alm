 
  angular
    .module('myApp')
    .controller('SearchClientByNameCtrl', ['$scope','$rootScope','$window','ClientService',SearchClientByNameCtrl]);
  
  function SearchClientByNameCtrl(scope,rootScope,window,ClientService) {
	  	scope.name;
	  	scope.list=["data1","data2"];
	  	scope.client;
	   
	  	scope.refresh1=function(){
	  	   //alert(scope.name);
	  		var response=ClientService.showClientByName(scope.name);
	  		response
		      .then(function(resp) {
		    	  scope.client=resp.data;
		    	  //alert(JSON.stringify(resp));
		       }, function() {
		         
		       });
	  	
	  	}
	  	
	    
	    
	    scope.refresh= function(){
	    	ClientService.getClientNameList().then(function(data){
	    		scope.list = data.data;
	    	},function(error){
	    		alert(error);
	    	})
	    
	    }
	   
	    
	   
	  
	  
 }

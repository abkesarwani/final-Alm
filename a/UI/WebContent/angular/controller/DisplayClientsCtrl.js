 
  angular
    .module('myApp')
    .controller('DisplayClientsCtrl', ['$scope','$rootScope','$window','ClientService',DisplayClientsCtrl]);
  
  function DisplayClientsCtrl(scope,rootScope,window,ClientService) {
	  	scope.clients = ["data1","data2"];

	    scope.refresh= function(){
	    	ClientService.showAllClients().then(function(data){
	    		//alert(JSON.stringify(data.data));
	    		
	    		scope.clients = data.data;
	    		
	    	},function(error){
	    		alert(error);
	    	})
	    
	    }
	    var data;
	    scope.edit=function(data){
	    	
	    	//alert(JSON.stringify(data));
	    	rootScope.cl=data;
	    	window.location.href="#/editClient"
	    }
	    
	    scope.inactive=function(data){
	    	
	    	//alert(data);
	    	var response=ClientService.inactiveClient(data);
	    	response
		      .then(function(resp) {
		    	  alert(resp.data.msg);
		    	  window.location.reload();
		       }, function() {
		         
		       });
	    }
	  
	  
 }

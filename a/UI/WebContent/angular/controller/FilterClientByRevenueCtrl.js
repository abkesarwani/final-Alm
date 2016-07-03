 
  angular
    .module('myApp')
    .controller('FilterClientByRevenueCtrl', ['$scope','$rootScope','$window','ClientService',FilterClientByRevenueCtrl]);
  
  function FilterClientByRevenueCtrl(scope,rootScope,window,ClientService) {
	  
	  
	  scope.sort= function(){
	    	ClientService.showAllClientsByRevenue(scope.range).then(function(data){
	    		//alert(JSON.stringify(data));
	    	
	    		
	    		scope.clients = data.data;
	    		
	    		
	    	},function(error){
	    		alert(error);
	    	})
	    
	    }
	  
	  /*scope.sort = function(col) {
	      scope.onCol = col;
	    };*/
	  
	  	
	  
 
  }
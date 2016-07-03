 
  angular
    .module('myApp')
    .controller('FilterClientByDomainCtrl', ['$scope','$rootScope','$window','ClientService',FilterClientByDomainCtrl]);
  
  function FilterClientByDomainCtrl(scope,rootScope,window,ClientService) {
	  
	    scope.refresh= function(){
	    	ClientService.showDomains().then(function(data){
	    		scope.domains = data.data;
	    	},function(error){
	    		alert(error);
	    	})
	    
	    }
	   
	  
 
  }
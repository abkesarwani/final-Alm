 
  angular
    .module('myApp')
    .controller('FilterClientCtrl', ['$scope','$rootScope','$window','ClientService',FilterClientCtrl]);
  
  function FilterClientCtrl(scope,rootScope,window,ClientService) {
	  	/*scope.client ={};
	  	alert("hi");
	  	alert(JSON.stringify(rootScope.cl));
	  	scope.client=rootScope.cl;*/
	  	scope.domain=function(){
	  		
	  		window.location.href="#/filterbydomain"
	  		
	  	}
        scope.region=function(){
	  		
	  		window.location.href="#/filterbyregion"
	  		
	  	}
        scope.revenue=function(){
		
		window.location.href="#/filterbyrevenue"
		
	   }
	  	
	  
 }
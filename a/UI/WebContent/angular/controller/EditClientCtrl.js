 
  angular
    .module('myApp')
    .controller('EditClientCtrl', ['$scope','$rootScope','$window','ClientService',EditClientCtrl]);
  
  function EditClientCtrl(scope,rootScope,window,ClientService) {
	  //	scope.client ={};
	  	//alert("hi");
	  	//alert(JSON.stringify(rootScope.cl));
	  	scope.client=rootScope.cl;
	  	//alert(JSON.stringify(scope.client));
	  	scope.updateClient=function(){
	  		
	  		var response=ClientService.updateClient(scope.client);
	  		response
		      .then(function(resp) {
		    	  alert(resp.data.msg);
		    	  window.location.href="#/seeAllClients";
		       }, function() {
		         
		       });
	  		
	  	}
	  
 }

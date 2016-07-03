 
  angular
    .module('myApp')
    .controller('ClientCtrl', ['$scope','$rootScope','$window','ClientService',ClientCtrl]);
  
  function ClientCtrl(scope,rootScope,window,ClientService) {
	  	scope.client = {};
		scope.clientlist = [];
		
		
		//Function used to add new client
		scope.add = function() {
				if(scope.client.domain1===true)
					scope.client.domain1='healthcare';
				if(scope.client.domain2===true)
					scope.client.domain2='Media and Entertainment';
				if(scope.client.domain3===true)
					scope.client.domain3='Technology';
				
				//alert(JSON.stringify(scope.client));
		      var response=ClientService.newClient(scope.client);
		      
		      response
		      .then(function(resp) {
		    	 // alert(resp.data.msg);
					rootScope.clientName = scope.client.name;
					if(resp.data.msg=="Poc duplicate Found")
						{
						alert("Duplicate Name For POC ");
						}
					else if(resp.data.msg=="duplicate client not allow")
					{
					alert("Client Already Exist");
					}
					else  if(resp.data.msg=="success")
						{
						alert("Client Added Successfully");
					 window.location.href = '#/office';
						}
		       }, function() {
		         
		       });
		    };//End of function
		    
		    scope.refresh= function(){
		    	ClientService.getPOC().then(function(data){
		    		scope.list = data.data;
		    	},function(error){
		    		alert(error);
		    	})
		    
		    }
  }

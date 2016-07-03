 
  angular
    .module('myApp')
    .controller('OfficeCtrl', ['$scope','$rootScope','$window','ClientService',OfficeCtrl]);
  
  function OfficeCtrl(scope,rootScope,window,ClientService) {
	  	scope.client = {};
		scope.clientlist = [];
		scope.client.c_name=rootScope.clientName;
		
		//Function used to add new location
		scope.addLocation = function() {
				//alert(JSON.stringify(scope.client));
		      var response=ClientService.addLocation(scope.client);
		      
		      response
		      .then(function(resp) {
		    	  if(resp.data.msg=="success")
		    		  {
		    		  var value=confirm("Do You Want To Add More Offices");
		    		  if (value == true) {
		    			   window.location.href="#/office";
		    			  // window.location.reload();
		    			} else {
		    				 window.history.back();
		    			}
		    		  }
		    	  
		       }, function() {
		         
		       });
		    };//End of function
  }

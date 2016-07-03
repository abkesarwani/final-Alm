 
  angular
    .module('myApp')
    .controller('UserHomeCtrl', ['$scope','$rootScope','$window','UserService',UserHomeCtrl]);
  
  function UserHomeCtrl(scope,rootScope,window,UserService) {
	  //	scope.client ={};
	  	
	  	//alert(JSON.stringify(rootScope.c1));
	  	scope.user=rootScope.c1;
	  	//alert(JSON.stringify(scope.user.data.u_name));
	  	alert(JSON.stringify(scope.user.u_name));
	  	/*scope.updateClient=function(){
	  		
	  		var response=ClientService.updateClient(scope.client);
	  		response
		      .then(function(resp) {
		    	  alert(resp.data.msg);
		       }, function() {
		         
		       });
	  		
	  	}*/
	  
	  var data;
	    scope.edit=function(){
	    	
	    	//alert(JSON.stringify(scope.user));
	    	rootScope.c1=scope.user;
	    	//alert(JSON.stringify(c1));
	    	window.location.href="#EditUserDetails";
	    }
	    
	    scope.role=function(){
	    	var response=UserService.getRoleStatus(scope.user.u_role);
	    	response
		      .then(function(resp) {
		    	
		    	  if(resp.data.r_status=="active")
		    		  {
			    	if(scope.user.u_role=="cxo")
			    		{
			    		window.location.href="#/CXO";
			    		}
			    	else if(scope.user.u_role=="um")
		    		{
			    		window.location.href="#/UM";
		    		}
			    	else if(scope.user.u_role=="pm")
		    		{
			    		window.location.href="#/PM";
		    		}
			    	else
		    		{
		    		alert("No Permissions Regarding This Role");
		    		}
	    	}
	    	else
	    		{
	    		alert("Role Is Inactive");
	    		}
		      
		      })
	    }
	    scope.group=function(){
	    	
	    	var response=UserService.getGroupStatus(scope.user.u_group);
	    	//alert(JSON.stringify(response));
	    	response
		      .then(function(resp) {
		   
		    	  if(resp.data.g_status=="active")
		    		  {
			    	if(scope.user.u_group=="level1")
			    		{
			    		window.location.href="#/Level1";
			    		}
			    	else if(scope.user.u_group=="level2")
		    		{
			    		window.location.href="#/Level2";
		    		}
			    	else if(scope.user.u_group=="level3")
		    		{
			    		window.location.href="#/Level3";
		    		}
			    	else
		    		{
		    		alert("No Permissions Regarding This Role");
		    		}
	    	}
	    	else
    		{
    		alert("Group Is Inactive");
    		}
	    })
	    }
 }

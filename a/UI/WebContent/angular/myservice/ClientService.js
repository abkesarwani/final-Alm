 
  angular
    .module('myApp')
    .service('ClientService', ['$http', function(http) {
    	
      var baseUrl = 'http://localhost:8065/ClientUserManagement/client';
      
      this.showAllClients = function() {
        return http.get(baseUrl+"/"+"getclientsdetails");
      };
      
      this.showClientByName = function(name) {
        return http.get(baseUrl+'/searchClient'+'/'+name);
      };
      
      /*this.saveClient = function(id,client) {
        return http.put(baseUrl+'/'+id,client);
      };*/
      
      this.newClient = function(client) {
          return http.post(baseUrl+'/'+'add',client);
        };
        this.addLocation=function(client) {
          return http.post(baseUrl+'/'+'location',client);
        };
        this.updateClient = function(client) {
            return http.post(baseUrl+'/'+'update',client);
          }; 
          this.inactiveClient = function(name) {
              return http.put(baseUrl+'/'+'deleteclient'+"/"+name);
            }; 
            
            this.getClientNameList = function() {
                return http.get(baseUrl+"/"+"getclients");
              };
              this.showDomains = function() {
                  return http.get(baseUrl+"/"+"getdomains");
                };
                this.showOffices = function() {
                  return http.get(baseUrl+"/"+"getregion");
                };
                this.showLocations = function() {
                    return http.get(baseUrl+"/"+"getlocation");
                  };
                
                  this.showAllClientsByRevenue = function(range) {
                	  //alert(range);
                      return http.get(baseUrl+"/"+"getrevenue/"+range);
                    };
                    this.getPOC = function() {
                        return http.get('http://localhost:8065/ClientUserManagement/user'+"/"+"getusersname");
                      };
                 
    }]);

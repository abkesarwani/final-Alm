 
  angular
    .module('myApp')
    .service('UserService', ['$http','$q', function(http,$q) {
      var baseUrl = 'http://localhost:8065/ClientUserManagement/user';
      
      this.showAllUsers = function() {
        return http.get(baseUrl+"/"+"getallusers");
      };
      
      this.getUser = function(name) {
        return http.get(baseUrl+'/'+name);
      };
      
      this.saveUser = function(id,client) {
        return http.put(baseUrl+'/'+id,client);
      };
      
      this.newUser = function(user) {
          return http.post(baseUrl+'/'+'add',user);
        };
        
        this.newPermission = function(permission) {
            return http.post(baseUrl+'/'+'addpermissions',permission);
          };
          
          this.showPermission = function() {
        	  /*var deferred = $q.defer();

        	  http.get(baseUrl+'/'+'groups').success(
        			  function(data){
        				  deferred.resolve(data);
        			  }).
        			  error(function(error){
        				  deferred.reject(error);
        			  })
        	   
        	  return deferred.promise;
              */
        	  return  http.get(baseUrl+'/'+'getpermissions');
            };
            
            this.showRole = function() {
          	  return  http.get(baseUrl+'/'+'getroles');
              };
              
              this.assignPerm2Role = function(perm2role) {
                  return http.post(baseUrl+'/'+'addrolepermissions',perm2role);
                };
            
            this.addRole = function(role) {
                return http.post(baseUrl+'/'+'addrole',role);
              };
              
              this.addGroup = function(group) {
                  return http.post(baseUrl+'/'+'addgroup',group);
                };  
                
                this.showGroup = function() {
                	  return  http.get(baseUrl+'/'+'getgroup');
                    };
                    this.assignPerm2Group = function(perm2group) {
                        return http.post(baseUrl+'/'+'addgrouppermissions',perm2group);
                      };
               this.inactiveUser = function(name) {
                          return http.put(baseUrl+'/'+'deleteuser'+"/"+name);
                        }; 
                this.updateUser = function(user) {
                        	//alert(JSON.stringify(user));
                            return http.post(baseUrl+'/'+'update',user);
                          }; 
                          
                  this.showAllRoles = function() {
                          	  return  http.get(baseUrl+'/'+'getallroles');
                              };         
                 this.updateRole = function(role) {
                             // 	alert(JSON.stringify(role));
                                  return http.post(baseUrl+'/'+'updaterole',role);
                                };             
                 this.inactiveRole = function(name) {
                                    return http.put(baseUrl+'/'+'deleterole'+"/"+name);
                                  };           
                                       
               
           this.showAllPermissions = function() {
                          return  http.get(baseUrl+'/'+'getallpermissions');
                                 };  
                                 
                                 this.inactivePermission = function(name) {
                                     return http.put(baseUrl+'/'+'deletepermission'+"/"+name);
                                   };                          
                                   
                          this.updatePermission= function(permission) {
                             	//alert(JSON.stringify(permission));
                                         return http.post(baseUrl+'/'+'updatepermission',permission);
                                };   
                                this.login= function(user) {
                                //	alert(JSON.stringify(user));
                                    return http.post(baseUrl+'/checkuserpass',user);
                                  };
                                  this.sendGroupName = function(name) {
                                      return http.get(baseUrl+'/'+'getgrouppermission'+"/"+name);
                                    };  
                                    this.sendRoleName = function(name) {
                                        return http.get(baseUrl+'/'+'getrolepermission'+"/"+name);
                                      }; 
                                      this.getRoleStatus = function(name) {
                                    	  //alert(name);
                                          return http.get(baseUrl+'/'+'roleinfo'+"/"+name);
                                        }; 
                                        this.getGroupStatus = function(name) {
                                            return http.get(baseUrl+'/'+'groupinfo'+"/"+name);
                                          }; 
                             
                              
                                 
    }]);

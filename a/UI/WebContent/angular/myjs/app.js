'use strict';

var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(['$routeProvider', function(rp) {
	rp.when('/home', {
		templateUrl : 'angular/myhtml/home.html',
		controller : 'HomeCtrl'
	})
	.when('/addClient', {
		templateUrl : 'angular/myhtml/cregisteration.html',
		controller : 'ClientCtrl'
	})
	.when('/office', {
		templateUrl : 'angular/myhtml/office.html',
		controller : 'OfficeCtrl'
	})
	.when('/addUser', {
		templateUrl : 'angular/myhtml/uregisteration.html',
		controller : 'UserCtrl'
	})
	.when('/addPermission', {
		templateUrl : 'angular/myhtml/addpremission.html',
		controller : 'PermissionCtrl'
	})
	.when('/addRole', {
		templateUrl : 'angular/myhtml/addrole.html',
		controller : 'RoleCtrl'
	})
	.when('/addGroup', {
		templateUrl : 'angular/myhtml/addgroup.html',
		controller : 'GroupCtrl'
	})
	.when('/assignP2R', {
		templateUrl : 'angular/myhtml/per2role.html',
		controller : 'Per2RoleCtrl'
	})
	.when('/assignP2G', {
		templateUrl : 'angular/myhtml/per2group.html',
		controller : 'Per2GroupCtrl'
	})
	.when('/seeAllClients', {
		templateUrl : 'angular/myhtml/dispalyclients.html',
		controller : 'DisplayClientsCtrl'
	})
	
	.when('/editClient', {
		templateUrl : 'angular/myhtml/editclient.html',
		controller : 'EditClientCtrl'
	})
	.when('/searchClient', {
		templateUrl : 'angular/myhtml/searchclientbyname.html',
		controller : 'SearchClientByNameCtrl'
	})
	
	.when('/filterClient', {
		templateUrl : 'angular/myhtml/filterclients.html',
		controller  : 'FilterClientCtrl'
		
	})
	.when('/filterbydomain', {
		templateUrl : 'angular/myhtml/filterbydomain.html',
		controller  : 'FilterClientByDomainCtrl'
		
	})
	.when('/filterbyregion', {
		templateUrl : 'angular/myhtml/filterbyregion.html',
		controller  : 'FilterClientByRegionCtrl'
		
		
	})
	.when('/filterbyrevenue', {
		templateUrl : 'angular/myhtml/filterbyrevenue.html',
		controller  : 'FilterClientByRevenueCtrl'
		
	})
	.when('/seeAllUsers', {
		templateUrl : 'angular/myhtml/displayusers.html',
		controller  : 'DisplayUsersCtrl'
		
	})
	.when('/EditUser', {
		templateUrl : 'angular/myhtml/edituser.html',
		controller  : 'EditUserCtrl'
		
	})
	.when('/displayAllRoles', {
		templateUrl : 'angular/myhtml/displayroles.html',
		controller  : 'DisplayRoleCtrl'
		
	})
	.when('/displayAllPermissions', {
		templateUrl : 'angular/myhtml/displaypermissions.html',
		controller  : 'DisplayPermissionCtrl'
		
	})
	.when('/EditRole', {
		templateUrl : 'angular/myhtml/editrole.html',
		controller  : 'EditRoleCtrl'
		
	})
	.when('/EditPermission', {
		templateUrl : 'angular/myhtml/editpermission.html',
		controller  : 'EditPermissionCtrl'
		
	})
	.when('/login', {
		templateUrl : 'angular/myhtml/login.html',
		controller  : 'LoginCtrl'
		
	})
	.when('/admin', {
		templateUrl : 'angular/myhtml/admin.html',
		controller  : 'AdminCtrl'
		
	})
	.when('/user', {
		templateUrl : 'angular/myhtml/user.html',
		controller  : 'UserHomeCtrl'
		
	})
	.when('/EditUserDetails', {
		templateUrl : 'angular/myhtml/edituserdetails.html',
		controller  : 'EditUserDetailsCtrl'
		
	})
	.when('/CXO', {
		templateUrl : 'angular/myhtml/CXO.html',
		controller  : 'CXOCtrl'
		
	})
	.when('/UM', {
		templateUrl : 'angular/myhtml/UM.html',
		controller  : 'UMCtrl'
		
	})
	.when('/PM', {
		templateUrl : 'angular/myhtml/PM.html',
		controller  : 'PMCtrl'
		
	})
	.when('/Level1', {
		templateUrl : 'angular/myhtml/Level1.html',
		controller  : 'Level1Ctrl'
		
	})
	.when('/Level2', {
		templateUrl : 'angular/myhtml/Level2.html',
		controller  : 'Level2Ctrl'
		
	})
	.when('/Level3', {
		templateUrl : 'angular/myhtml/Level3.html',
		controller  : 'Level3Ctrl'
		
	})
	.when('/addclient1', {
		templateUrl : 'angular/myhtml/addclient1.html',
			controller  : 'AddClient1Ctrl'	
	})
	.when('/SeeAllPermissionRole', {
		templateUrl : 'angular/myhtml/SeeAllPermissionsToRoles.html',
			controller  : 'SeeAllPermissionRoleCtrl'	
	})
	.when('/SeeAllPermissionGroup', {
		templateUrl : 'angular/myhtml/SeeAllPermissionsToGroups.html',
			controller  : 'SeeAllPermissionGroupCtrl'	
	})
	
	.otherwise({
		redirectTo : '/home'
	});
} ]);
angular.module("ngAngius",['angiusCtrl','ngRoute','ngAnimate','ui.bootstrap'])

	.config(function($routeProvider,$httpProvider) {
			$routeProvider
			.when ('/',{
			        templateUrl:'views/home.tpl.html',
			        controller:'homeCtrl'
			        
			        })
			.when ('/login',{
			        templateUrl:'views/login.tpl.html',
			        controller:'loginCtrl'
			        })
			.when ('/admin',{
			        templateUrl:'views/admin.tpl.html',
			        controller:'adminCtrl'
			        })
			.when ('/wall',{
			        templateUrl:'views/wall.tpl.html',
			        controller:'wallCtrl'
			        })
			.when ('/museum',{
			        templateUrl:'views/museum.tpl.html',
			        controller:'museumCtrl'
			        })
			.otherwise ({
			        redirectTo:'/'
			        });
			        
			$httpProvider
			.interceptors.push('myHttpInterceptor');

		})
	.factory('myHttpInterceptor', function ($q) {
 		return {
 			response: function (response) {
 				return response;
 			},
 			responseError: function (response) {
 				window.alert(response.data);
 				return $q.reject(response);
 			}
 		};
 	})
	.value('version',"Angius - 1.0.2")
	.value('pwd',"melo_yo")
	.run(function($rootScope,$location,pwd,version) {
		$rootScope.version = version;
			$rootScope.pwd = pwd;
		$rootScope.navs = [
		{"label":"HoMe",
		 "route":"/"},
		 {"label":"wALL",
		 "route":"wall"},
		 {"label":"mUseUm",
		 "route":"museum"}];
		 $rootScope.goto = function (route) {
		 	$location.path("/"+route);
		 };
		 
	});
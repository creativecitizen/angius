angular.module('angiusCtrl',[])
	.controller("loginCtrl",function($scope,$rootScope,$location,pwd,version) {
				var i = 0;
				var indices = ["un nounours","une prairie"];
				$scope.login = function () {
					if ($scope.pass === pwd ) {
						$rootScope.navOn = "true";
						$location.path("/admin");
					} else {
						$scope.erreur = "Mauvais mot de passe!";
					}
				}
	})
	.controller("generalCtrl",function($scope,$rootScope,$sce){
		$rootScope.teaser_lecteur = false;
		$scope.current = "";
		
		/*$scope.showTeaser = function (id) {
			$rootScope.teaser_lecteur = "teaser "+id;
			$rootScope.current = id;
		}
		$scope.showLecteur = function (id) {
			console.log("lecteur "+id);
		}*/
	})
	.controller("adminCtrl",function($scope,$rootScope,$sce) {
			
	})
	.controller("homeCtrl",function($scope,$rootScope,$sce) {
		
	})
	.controller("wallCtrl",function($scope,$rootScope,$sce) {
		
	})
	.controller("museumCtrl",function($scope,$rootScope,$sce) {
	
	})
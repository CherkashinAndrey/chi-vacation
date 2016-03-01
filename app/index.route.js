import { roles, routeStates } from './constants/index.const';

export default function routerConfig ($stateProvider, $urlRouterProvider) {
	'ngInject';


	$stateProvider
			.state(routeStates.login, {
				url: '/login',
				templateUrl: 'app/pages/login/login.html',
				controller: 'LoginController',
				controllerAs: 'main',
				data: {
					roles: roles.anonim
				}
			})
			.state(routeStates.home, {
				url: '/',
				templateUrl: 'app/pages/user/userPage.html',
				data: {
					roles: roles.user
				},
				resolve: {
					user : function (firebaseService) {
						'ngIngect'
             return firebaseService.loadUser();
         }
				}
			})
			.state(routeStates.admin, {
				url: '/admin',
				templateUrl: 'app/pages/admin/vv.html',
				data: {
					roles: roles.admin
				},
				resolve: {
					userList : function (firebaseService) {
						'ngIngect'
             return firebaseService.getUsersList();
         }
				}
			})
			.state(routeStates.manager, {
				url: '/admin',
				data: {
					roles: roles.manager
				},
				resolve: {
					userList : function (firebaseService) {
						'ngIngect'
             return firebaseService.getUsersList();
         }
				},
				templateUrl: 'app/pages/managerPage/managerPage.html'
			});

$urlRouterProvider.otherwise('/');

}

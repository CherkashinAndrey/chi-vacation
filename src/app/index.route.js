import { roles } from './index.const';

export default function routerConfig ($stateProvider, $urlRouterProvider) {
	'ngInject';


	$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'app/pages/login/login.html',
				controller: 'LoginController',
				controllerAs: 'main',
				data: {
					roles: roles.public
				}
			})
			.state('home', {
				url: '/',
				templateUrl: 'app/pages/user/userPage.html',
				data: {
					roles: roles.user
				},
				resolve: {
					user : function (firebaseService) {
						'ngIngect'
             return firebaseService.getUserData();
         }
				}
			})
			.state('admin', {
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
			.state('manager', {
				url: '/admin',
				data: {
					roles: ['Maneger']
				},
				resolve: {
					userList : function (firebaseService) {
						'ngIngect'
             return firebaseService.getUsersList();
         }
				},
				templateUrl: 'app/pages/manegerPage/manegerPage.html',
				controller: 'ManagerController',
				controllerAs: 'main'
			});

$urlRouterProvider.otherwise('/');

}

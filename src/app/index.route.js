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
				}
			})
			.state('admin', {
				url: '/admin',
				templateUrl: 'app/pages/admin/vv.html',
				data: {
					roles: roles.admin
				}
			})
			.state('manager', {
				url: '/admin',
				data: {
					roles: ['Maneger']
				},
				templateUrl: 'app/pages/manegerPage/manegerPage.html',
				controller: 'ManagerController',
				controllerAs: 'main'
			});

$urlRouterProvider.otherwise('/');

}

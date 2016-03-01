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
            roles: roles.anonim
        }
    })
    .state('home', {
        url: '/',
        templateUrl: 'app/pages/user/user.html',
        controller: 'UserController',
        controllerAs: 'userCtrl',
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

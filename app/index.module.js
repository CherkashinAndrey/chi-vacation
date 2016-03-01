import  config  from './index.config';
import  routerConfig  from './index.route';
import  runBlock  from './index.run';
import LoginController from './pages/login/login.controller';
import firebaseService from './components/firebase/firebase.service';
import PermissionService from './components/persmissions/persmissions.service';
import NavbarDirective from './components/navbar/navbar.directive';


angular.module('vacation', ['ngAnimate', 'ngMessages', 'ui.router', 'ui.bootstrap', 'firebase', 'toastr'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('firebaseService', firebaseService)
  .service('permission', PermissionService)
  .directive('vacNavbar', NavbarDirective)
  .controller('LoginController', LoginController)


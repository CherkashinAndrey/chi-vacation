/* global moment: false*/

import config  from './index.config';
import routerConfig  from './index.route';
import runBlock  from './index.run';
import LoginController from './pages/login/login.controller';
import UserController from './pages/user/user.controller';
import firebaseService from './components/firebase/firebase.service';
import PermissionService from './components/persmissions/persmissions.service';
import NavbarDirective from './components/navbar/navbar.directive';
import DatepickerDirective from './components/datepicker/datepicker.directive';


angular.module('vacation', ['ngAnimate', 'ngMessages', 'ui.router', 'ui.bootstrap', 'firebase', 'toastr'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('firebaseService', firebaseService)
  .service('permission', PermissionService)
  .directive('vacNavbar', NavbarDirective)
  .directive('vacDatepicker', DatepickerDirective)
  .controller('LoginController', LoginController)
  .controller('UserController', UserController)


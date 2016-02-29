export default function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
    },
    controller: NavbarController,
    controllerAs: 'vm'
  };

  return directive;
}

class NavbarController {
  constructor (firebaseService) {
    'ngInject';
    this.firebaseService = firebaseService;
    this.user = {
      role: 'admin',
      firstName: 'Vasya',
      lastName: 'Ivanov',
      uid: 'asdas'
    };
  }

  logOut() {
    this.firebaseService.logOut();
  }

}

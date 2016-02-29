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
  constructor (firebaseService, $rootScope, $scope) {
    'ngInject';
    this.firebaseService = firebaseService;
    this.user = {};
    this.activate($rootScope, $scope);
  }

  activate($rootScope, $scope) {
    let destr = $rootScope.$on('userLoaded',
                  (ev, user) => this.user = user );
    $scope.$on('destroy', destr);
  }

  logOut() {
    this.firebaseService.logOut();
    this.user = {};
  }

}

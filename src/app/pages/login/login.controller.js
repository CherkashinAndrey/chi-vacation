export default class LoginController {
  constructor ($log, $state, $scope, firebaseService,toastr) {
    'ngInject';

     this.$state = $state;
     this.$log = $log;
     this.toastr = toastr;
     this.$scope = $scope;
     this.sending = false;
     this.firebaseService = firebaseService;
  }

  signin () {
    if(this.$scope.loginForm.$invalid) {
      this.toastr.warning('fill all fild');
      return
    }
    this.sending = true;
    let _this = this;
    this.firebaseService.signInUserByEmail({
      email: this.email,
      password: this.passw
    }).then( () => {
        _this.$state.go('home');
    }).catch( err => {
      _this.$log.error(err);
      _this.sending = false;
    });
  }
  
}

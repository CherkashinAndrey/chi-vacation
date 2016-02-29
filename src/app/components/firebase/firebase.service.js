/* global Firebase:false, jQuery:false */

export default class firebaseService {
	constructor ($firebaseObject, $firebase, $firebaseAuth, $q, $log) {
		'ngInject';
		this.URL = 'https://vivid-fire-3850.firebaseio.com/users';
		this.$firebaseObject = $firebaseObject;
		this.$firebaseAuth = $firebaseAuth;
		this.$q = $q;
		this.$log = $log;
		this.userStorageKey = 'authUser';
		this.firebaseObj = new Firebase(this.URL);
		this.authUser = jQuery.jStorage.get(this.userStorageKey) || { status:false, data: false, role: 'anonim' };
		this.userData = {};
		this.defaultData = {
			firstName: '',
			lastName: '',
			role: 'user',
			group: '',
			phone: '',
			email: '',
			uid: '',
			vacations: {
				total: 0,
				dayOff: 0,
				list: [{
					startDate: '',
					endDate: '',
					confirm: false,
					comments: ''
				}]
			}
		};

	}

	
	_getClearObj(obj) {
		let newObj = {};
		angular.forEach(obj, (value, key) => newObj[key] = value);	
		return newObj;
	}

	_getClearArray(arr) {
		let newArr = [];
		angular.forEach(arr, value => newArr.push(value));
		return newArr;
	}

	_getCurrentUid() {
		return this.authUser.data.uid;
	}


	checkPersmissions(arr) {
		return !!~arr.indexOf(this.authUser.role);
	}

	getUsersList() {
		let arr = this._getClearArray;
		let deferred = this.$q.defer();
		this.$firebaseObject( this.firebaseObj ).$loaded( 
				data => deferred.resolve( arr( data ) ),
				error => deferred.reject(error) );
		return deferred.promise;
	}

	getUserData() {
		let _this = this;
		let deferred = _this.$q.defer();
		let userRef = _this.firebaseObj.child(_this.authUser.data.uid);
		_this.$firebaseObject(userRef).$loaded(function(data) {
			_this.userData = _this._getClearObj(data);
			deferred.resolve(_this.userData);
		}, function(error) {
			deferred.reject(error);
		});
		
		return deferred.promise;
	}

	updateUserData(id, data) {
		let deferred = this.$q.defer();
		let usersRef = this.firebaseObj;
		usersRef.update({ [id]: data }, 
			function(error) {
				if (error === null) {
					deferred.resolve({status: true})
				} else {
					deferred.reject({status: false, error: error})
				}
			}
			);
		return deferred.promise;
	}

	createUserByEmail(newUser) {
		let _this = this;
		let deferred = _this.$q.defer();
		_this.firebaseObj.createUser({
			email    : newUser.email,
			password : newUser.password
		}, function(error, userData) {
			if (error === null) {
				_this.$log.debug('created user with uid', userData.uid);
				let user = angular.extend(_this.defaultData, newUser, {uid: userData.uid});
				deferred.resolve(
					_this.updateUserData(userData.uid, user)
					)
			} else {
				deferred.reject({
					status: false,
					error: error
				});
			}
		});
		return deferred.promise;
	}
	

	signInUserByEmail(user) {
		let _this = this;
		let deferred = _this.$q.defer();
		_this.firebaseObj.authWithPassword(user, function(error, data) {
			if (error === null) {
				_this.authUser.data = {};
				_this.authUser.data.uid = data.uid;
				_this.getUserData().then(function(user){
					_this.authUser = {
						status: true,
						data: data,
						role: user.role
					};
					deferred.resolve(_this.authUser);
					jQuery.jStorage.set(_this.userStorageKey, _this.authUser);
				}, signInError)
				
			} else {
				signInError(error);
			}
		});
		return deferred.promise;
		
		function signInError(error){
			deferred.reject({
				status: false,
				error: error
			});
			_this.logOut();	
		}
	}


	deleteUser(email, password) {
		let _this = this;
		let deferred = _this.$q.defer();
		_this.firebaseObj.removeUser({
			email    : email,
			password : password
		}, function(error) {
			if (error === null) {
				deferred.resolve({status: true});
			} else {
				deferred.reject({
					status: false,
					error: error
				})
			}
		});
		return deferred.promise;
	}


	getUserState() {
		let _this = this;
		if (_this.authUser.data) {
			let data = _this.firebaseObj.getAuth();
			_this.authUser = {
				status: data ? true : false,
				data: (data == null) ? {} : data,
				role: this.authUser.role
			};
			jQuery.jStorage.set(_this.userStorageKey, _this.authUser);
		}
		return _this.authUser.status;
	}


	logOut() {
		let _this = this;
		_this.$firebaseAuth(_this.firebaseObj).$unauth();
		jQuery.jStorage.deleteKey(_this.userStorageKey);
		this.authUser = { status:false, data: false, role: 'anonim' };
	}


	getAuthUser() {
		return this.authUser.data;
	}


	changeUserPass(email, oldPassword, newPassword) {
		let _this = this;
		let deferred = _this.$q.defer();
		_this.firebaseObj.changePassword({
			email       : email,
			oldPassword : oldPassword,
			newPassword : newPassword
		}, function(error) {
			if (error === null) {
				deferred.resolve({status: true});
				_this.$log.debug("Password changed successfully");
			} else {
				deferred.reject({status: false, error: error});
				_this.$log.debug("Error changing password:", error);
			}
		});
		return deferred.promise;
	}
	
	resetAndSendPassword(email) {
		let _this = this;
		let deferred = _this.$q.defer();
		_this.firebaseObj.resetPassword({
			email : email
		}, function(error) {
			if (error === null) {
				deferred.resolve({status: true});
				_this.$log.debug("Password reset email sent successfully");
			} else {
				deferred.reject({status: false, error: error});
				_this.$log.debug("Error sending password reset email:", error);
			}
		});
		return deferred.promise;
	}
	

}


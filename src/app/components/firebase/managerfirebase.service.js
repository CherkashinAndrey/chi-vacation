export default class managerFirebaseService {
	constructor (firebaseService ) {
		'ngInject';
		
		this.firebaseService = firebaseService;
		
	}

	//get list of users (have to role admin or manager). return promise
	getUsersList() {
		return this.firebaseService.getUsersList();
	}

	//update user with uid = data.uid
	updateUserData(data) {
		return this.firebaseService.updateUserData(data.uid, data);
	}

	//user, return promise, where "newUser" is object {email, password, firstName, lastName, role, etc}. return promise
	createUserByEmail(newUser) {
		return this.firebaseService.createUserByEmail(newUser);
	}

}


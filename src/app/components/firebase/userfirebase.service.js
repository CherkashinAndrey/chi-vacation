export default class userFirebaseService {
	constructor (firebaseService ) {
		'ngInject';
		
		this.firebaseService = firebaseService;
		
	}

	//get data for current user, return promise
	getUserData() {
		return this.firebaseService.getUserData();
	}

	//update current user, return promise, where "data" is object {uid, firstName, lastName, email, role, etc}
	updateUserData(data) {
		return this.firebaseService.updateUserData(data.uid, data);
	}

	//change password of current user, return promise
	changeUserPassword(email, oldPassword, newPassword) {
		return this.firebaseService.changeUserPass(email, oldPassword, newPassword);
	}

	//reset password of current user. new password will be send by email. return promise
	resetUserPassword(email) {
		return this.firebaseService.resetAndSendPassword(email);
	}

	//logout current user
	logout() {
		return this.firebaseService.logOut();
	}
}


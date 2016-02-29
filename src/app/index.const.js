const users = {
	admin: 'admin',
	user: 'user',
	manager: 'manager',
	anonim: 'anonim'
}
const roles = {
	admin: [users.admin],
	anonim : [users.anonim],
	manager: [users.users, users.manager],
	user : [users.admin, users.user, users.manager],
	public: [users.admin, users.user, users.manager, users.anonim]
}


export { roles }
const users = {
	admin: 'admin',
	user: 'user',
	manager: 'manager',
	anonim: 'anonim'
}

const roles = {
	admin: [users.admin],
	anonim : [users.anonim],
	manager: [users.manager],
	user : [users.admin, users.user, users.manager],
	public: [users.admin, users.user, users.manager, users.anonim]
}

const ations = {
   userLoaded: 'userLoaded'
}

const groups = [
   '.Net',
   'Android',
   'Business Analyst',
   'Data Bases',
   'Design',
   'HR',
   'iOS',
   'IT',
   'Java',
   'JavaScript',
   'Managers',
   'Marketing Manager',
   'Markup',
   'NodeJS',
   'Operations',
   'PHP',
   'Python',
   'QA', 
   'Ruby',
   'Sales'
  ];

const routeStates = {
   login : 'login',
   home: 'home',
   admin: 'admin',
   manager: 'manager'
}

export { groups, roles, ations, routeStates }
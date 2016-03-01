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

export { groups, roles }
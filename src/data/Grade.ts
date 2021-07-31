import { Grade } from '../definitions/definitions';

export const grade: Grade = {
	categories: [{
		name: 'Human',
		skills: {
			1: {
				positions: {
					1: 1,
					2: 2,
					3: 2,
					4: 3,
					5: 4,
					6: 3,
					7: 4,
					8: 4,
					9: 5,
				},
			},
			2: {
				positions: {
					1: 1,
					2: 2,
					3: 2,
					4: 3,
					5: 3,
					6: 2,
					7: 3,
					8: 4,
					9: 5,
				},
			},
			3: {
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 3,
					5: 4,
					6: 3,
					7: 4,
					8: 4,
					9: 5,
				},
			},
			4: {
				positions: {
					1: 2,
					2: 2,
					3: 3,
					4: 3,
					5: 4,
					6: 3,
					7: 4,
					8: 4,
					9: 5,
				},
			},
		},
	}, {
		name: 'Craft',
		skills: {
			5: {
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 4,
					5: 5,
					6: 3,
					7: 3,
					8: 4,
					9: 5,
				},
			},
			6: {
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 4,
					5: 5,
					6: 3,
					7: 3,
					8: 4,
					9: 5,
				},
			},
			7: {
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 4,
					5: 5,
					6: 3,
					7: 3,
					8: 4,
					9: 5,
				},
			},
			8: {
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 4,
					5: 5,
					6: 3,
					7: 3,
					8: 4,
					9: 5,
				},
			},
			9: {
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 4,
					5: 5,
					6: 3,
					7: 3,
					8: 4,
					9: 5,
				},
			},
			10: {
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 4,
					5: 5,
					6: 3,
					7: 3,
					8: 4,
					9: 5,
				},
			},
		},
	}, {
		name: 'Leadership',
		skills: {
			11: {
				positions: {
					2: 1,
					3: 1,
					4: 1,
					5: 2,
					6: 2,
					7: 3,
					8: 4,
					9: 5,
				},
			},
			12: {
				positions: {
					5: 1,
					6: 1,
					7: 2,
					8: 3,
					9: 4,
				},
			},
			13: {
				positions: {
					4: 1,
					5: 1,
					6: 1,
					7: 2,
					8: 3,
					9: 4,
				},
			},
			14: {
				positions: {
					2: 1,
					3: 2,
					4: 3,
					5: 3,
					6: 2,
					7: 3,
					8: 4,
					9: 5,
				},
			},
			15: {
				positions: {
					4: 1,
					5: 2,
					6: 2,
					7: 3,
					8: 4,
					9: 5,
				},
			},
		},
	}],
};

export const gradeRocket: Grade = {
	categories: [...grade.categories, {
		name: 'Development',
		skills: {
			'GitHub and Git': {
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 3,
				},
			},
			'CI/CD': {
				positions: {
					2: 1,
					3: 2,
					4: 3,
				},
			},
			'RESTful API & Web Services': {
				positions: {
					1: 2,
					2: 2,
					3: 3,
					4: 3,
				},
			},
			'Testing Best Practices': {
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 3,
				},
			},
			'Security Best Practices': {
				positions: {
					2: 1,
					3: 2,
					4: 3,
				},
			},
			SoftSkills: {
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 3,
				},
			},
			'Code Patterns / Lint / Build Tools': {
				positions: {
					2: 1,
					3: 2,
					4: 3,
				},
			},
			'System Architecture': {
				positions: {
					3: 1,
					4: 2,
				},
			},
			'Debugging skills': {
				positions: {
					2: 1,
					3: 2,
					4: 3,
				},
			},
			'Database SQL / NoSQL': {
				positions: {
					2: 1,
					3: 2,
					4: 3,
				},
			},
			WebsSockets: {
				positions: {
					2: 1,
					3: 2,
					4: 3,
				},
			},
			JavaScript: {
				restrictedTo: ['Frontend', 'Backend (App)'],
				positions: {
					1: 2,
					2: 2,
					3: 3,
					4: 3,
				},
			},
			TypeScript: {
				restrictedTo: ['Frontend', 'Backend (App)'],
				positions: {
					1: 1,
					2: 2,
					3: 2,
					4: 3,
				},
			},
		},
	}, {
		name: 'Frontend Development',
		restrictedTo: ['Frontend'],
		skills: {
			React: {
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 3,
				},
			},
			'UI/UX conventions - I18N, A11Y, accessibility': {
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 3,
				},
			},
			'HTML & CSS': {
				restrictedTo: ['Frontend (Web)'],
				positions: {
					1: 2,
					2: 2,
					3: 3,
					4: 3,
				},
			},
			'React Native/Native (iOS and/or Android)': {
				restrictedTo: ['Frontend (Mobile)'],
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 3,
				},
			},
			Redux: {
				restrictedTo: ['Frontend (Mobile)'],
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 3,
				},
			},
			Fastlane: {
				restrictedTo: ['Frontend (Mobile)'],
				positions: {
					2: 1,
					3: 2,
					4: 3,
				},
			},
			Detox: {
				restrictedTo: ['Frontend (Mobile)'],
				positions: {
					2: 1,
					3: 2,
					4: 3,
				},
			},
			'Native (iOS and Android)': {
				restrictedTo: ['Frontend (Mobile)'],
				positions: {
					3: 1,
					4: 2,
				},
			},
			Electron: {
				restrictedTo: ['Frontend (Electron)'],
				positions: {
					2: 1,
					3: 2,
					4: 3,
				},
			},
		},
	}, {
		name: 'Backend Development',
		restrictedTo: ['Backend'],
		skills: {
			'Linux OS': {
				positions: {
					1: 1,
					2: 1,
					3: 2,
					4: 2,
				},
			},
			'Micro services / Distributed systems': {
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 3,
				},
			},
			'DevOps and Containerization': {
				positions: {
					2: 1,
					3: 2,
					4: 2,
				},
			},
			MongoDB: {
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 3,
				},
			},
			NodeJS: {
				restrictedTo: ['Backend (App)'],
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 3,
				},
			},
			// 'Cloud-native': {
			// 	restrictedTo: ['Backend (Cloud)'],
			// 	positions: {
			// 		1: 1,
			// 		2: 2,
			// 		3: 3,
			// 		4: 3,
			// 	},
			// },
			Golang: {
				restrictedTo: ['Backend (Cloud)'],
				positions: {
					1: 1,
					2: 2,
					3: 3,
					4: 3,
				},
			},
			JavaScript: {
				restrictedTo: ['Backend (Cloud)'],
				positions: {
					1: 1,
					2: 2,
					3: 2,
					4: 3,
				},
			},
			TypeScript: {
				restrictedTo: ['Backend (Cloud)'],
				positions: {
					2: 1,
					3: 2,
					4: 2,
				},
			},
			// 'Networking and Internet Protocols': {
			// 	restrictedTo: ['Backend (Cloud)'],
			// 	positions: {
			// 		3: 1,
			// 		4: 2,
			// 	},
			// },
			// 'Cloud Service Providers': {
			// 	restrictedTo: ['Backend (Cloud)'],
			// 	positions: {
			// 		3: 1,
			// 		4: 2,
			// 	},
			// },
		},
	}, {
		name: 'Onboard',
		skills: {
			handbook: {
				positions: {
					1: 2,
					2: 2,
					3: 2,
					4: 2,
				},
			},
			'internal-processes': {
				positions: {
					1: 2,
					2: 2,
					3: 2,
					4: 2,
				},
			},
		},
	}],
};

export type SkillLevel = {
	level: number;
	description: string;
	examples: string[];
}

export type Skill = {
	id: string;
	name: string;
	description: string;
	image?: string;
	levels: SkillLevel[];
}

export type Department = {
	name: string;
	description: string;
}

export type Expertise = {
	department: Department;
	name: string;
	description: string;
}

export type Position = {
	id: string;
	name: string;
	description: string;
	level: number;
	restrictedTo?: (Department | Expertise)[];
	hiring?: {
		link: string;
	}
}

export type Discipline = {
	name: string;
	initials: string;
	positions: Position[];
}

export type Grade = {
	categories: {
		name: string;
		restrictedTo?: (Department | Expertise)[];
		skills: {
			[skill: string]: {
				[position: string]: number;
			}
		};
	}[];
}

export type Team = {
	id: string;
	name: string;
	status: 'draft' | 'public';
	slug: string;
	public: {
		enabled: boolean;
		path: string;
		description: string;
		social?: {
			image: string;
		}
	}
	disciplines: Discipline[];
	departments: Department[];
}

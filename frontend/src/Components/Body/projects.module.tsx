import { ProjectInterface } from './ProjectInterface';

import weatherApp from './Assets/weatherAPP.png';
import FS01 from './Assets/FullStackMEAR01.png';
import FS02 from './Assets/FullStackMEAR02.png';
import FS03 from './Assets/FullStackMEAR03.png';

import STLT01 from './Assets/STLT01.png';
import STLT02 from './Assets/STLT02.png';
import STLT03 from './Assets/STLT03.png';

import htmlI from './Assets/html5.png';
import cssI from './Assets/css.png';
import jsI from './Assets/JSicon.png';

import mongoI from './Assets/mongodbIcon.png';
import exI from './Assets/ExIcon.png';
import reactI from './Assets/ReactIcon.png';
import nodeI from './Assets/NodeIcon.png';
import tsI from './Assets/TSIcon.png';

import gitI from './Assets/GITicon.png';
import npmI from './Assets/npmicon.png';
import bootI from './Assets/BootstrapIcon.png';

const gitHubSVG =
	'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg==';

const projectsData: ProjectInterface[] = [
	{
		_id: 1,
		name: 'FullStack MEAR - My Learning Videos',
		img: [FS01, FS02, FS03],
		technologies: [mongoI, exI, reactI, nodeI, tsI, bootI, npmI],
		repository: 'https://github.com/jpta24/FullStack-MERN-My-Fav-Videos',
		description: 'React App, to practice CRUD with database',
		icon: gitHubSVG,
	},
	{
		_id: 2,
		name: 'WeatherApp',
		img: [weatherApp],
		technologies: [reactI, nodeI, bootI, gitI],
		repository: 'https://github.com/jpta24/weather-time-app',
		description: 'React App, to practice external API usage',
		icon: gitHubSVG,
	},

	{
		_id: 3,
		name: 'SITELOTRAIGO Google Chrome Extension',
		img: [STLT01, STLT02, STLT03],
		technologies: [htmlI, cssI, jsI],
		repository: 'https://github.com/jpta24/Sitelotraigo_ChromeExtension',
		description:
			'Chrome Extension, for a Client to get Shipping Price on every Amazon Product Website',
		icon: gitHubSVG,
	},
];

export default projectsData;

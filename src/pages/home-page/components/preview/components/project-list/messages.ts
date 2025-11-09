import Rest from '@/assets/project-image/rest.png';
import Climate from '@/assets/project-image/climate.png';
import Library from '@/assets/project-image/library.png';
import Async from '@/assets/project-image/async.png';

export const messages = {
  title: {
    rest: 'Rest Client App',
    library: 'Your Library',
    climate: 'Climate Data Viewer',
    async: 'Async Race',
  },

  description: {
    rest: 'Developed a simplified Postman-like web application for testing REST APIs. Implemented method selection, custom URL and headers configuration, and integrated authorization and authentication to restrict access to authorized users. Added a History section that tracks and allows users to revisit previously executed API requests.',
    library:
      'This is your Library. In this project I used Api Quering, Redux, RTK Query, routing and hooks, Next Js - server side rendering.',
    climate:
      'A React-based web application that fetches and displays large hierarchical CO₂ emissions data (~100 MB JSON). Implemented React Suspense for smooth, responsive data loading with a fallback spinner. Displays country-level information (name, population, ISO code) and detailed yearly statistics in a dynamic table. Includes a modal widget allowing users to select and display additional data columns such as methane, oil CO₂, and temperature change per year.',
    async:
      'A single-page application to manage a collection of radio-controlled cars. Users can start and stop engines, enable driving mode, and run drag-racing competitions. The app tracks race statistics in real time, showcasing which car is the fastest. Built with modern JavaScript and asynchronous operations to simulate real-time car control.',
  },

  language: {
    react: 'React',
    ts: 'TypeScript',
    js: 'JavaScript',
    html: 'HTML',
    css: 'CSS',
    scss: 'SCSS',
    nextJs: 'Next JS',
  },

  image: {
    rest: Rest,
    climate: Climate,
    library: Library,
    async: Async,
  },

  link: {
    rest: 'https://github.com/dianakhnizova/final-task-rest/pull/11',
    climate: 'https://github.com/dianakhnizova/rs-react/pull/8',
    library: 'https://your-library-dianakhnizova.netlify.app/',
    async: 'https://async-race-dianakhnizova.netlify.app/',
  },
};

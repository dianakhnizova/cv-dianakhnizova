import type { Project } from '@/sources/types';
import { messages } from './messages';

export const projectList: Project[] = [
  {
    title: messages.title.rest,
    description: messages.description.rest,
    language: [
      { title: messages.language.react },
      { title: messages.language.ts },
      { title: messages.language.css },
    ],
    image: messages.image.rest,
    link: messages.link.rest,
  },
  {
    title: messages.title.library,
    description: messages.description.library,
    language: [
      { title: messages.language.react },
      { title: messages.language.ts },
      { title: messages.language.css },
      { title: messages.language.nextJs },
    ],
    image: messages.image.library,
    link: messages.link.library,
  },
  {
    title: messages.title.climate,
    description: messages.description.climate,
    language: [
      { title: messages.language.react },
      { title: messages.language.ts },
      { title: messages.language.css },
    ],
    image: messages.image.climate,
    link: messages.link.climate,
  },
  {
    title: messages.title.async,
    description: messages.description.async,
    language: [
      { title: messages.language.ts },
      { title: messages.language.css },
    ],
    image: messages.image.async,
    link: messages.link.async,
  },
];

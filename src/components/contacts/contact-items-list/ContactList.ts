import type { MyData } from '@/sources/types';
import { messages } from './messages';

export const contactsList: MyData[] = [
  {
    label: messages.phoneTitle,
    data: messages.phoneLink,
    name: messages.phoneNumber,
  },
  {
    label: messages.emailTitle,
    data: messages.emailLink,
    name: messages.email,
  },
  {
    label: messages.gitHubTitle,
    data: messages.gitHubLink,
    name: messages.gitHub,
  },
  {
    label: messages.telegramTitle,
    data: messages.telegramLink,
    name: messages.telegram,
  },
  {
    label: messages.discordTitle,
    data: messages.discordLink,
    name: messages.discord,
  },
];

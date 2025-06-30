import { messages } from "./messages";
import type { ContactItem } from "./types";

export const contactsList: ContactItem[] = [
  {
    label: messages.phoneTitle,
    contact: messages.phoneNumber,
  },
  {
    label: messages.emailTitle,
    contact: messages.email,
  },
  {
    label: messages.telegramTitle,
    contact: messages.telegram,
  },
  {
    label: messages.discordTitle,
    contact: messages.discord,
  },
];

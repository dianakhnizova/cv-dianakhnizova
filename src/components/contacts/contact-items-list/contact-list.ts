import type { MyData } from "@/sources/types";
import { messages } from "./messages";

export const contactsList: MyData[] = [
  {
    label: messages.phoneTitle,
    data: messages.phoneNumber,
  },
  {
    label: messages.emailTitle,
    data: messages.email,
  },
  {
    label: messages.telegramTitle,
    data: messages.telegram,
  },
  {
    label: messages.discordTitle,
    data: messages.discord,
  },
];

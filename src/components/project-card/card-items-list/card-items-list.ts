import AsyncRace from "@/assets/project-image/async-race.png";
import SimonSays from "@/assets/project-image/simon-says.png";
import Nonograms from "@/assets/project-image/nonograms.png";
import ChristmasShop from "@/assets/project-image/christmas-shop.png";
import FunChat from "@/assets/project-image/fun-chat.png";
import Ecommerce from "@/assets/project-image/eCommerce.png";
import Decision from "@/assets/project-image/decision.png";
import { messages } from "./messages";
import type { CardItems } from "./types";

export const cardItemsList: CardItems[] = [
  {
    image: AsyncRace,
    name: messages.projectName.nameTitleAsync,
    url: messages.projectUrl.urlAsync,
  },
  {
    image: Nonograms,
    name: messages.projectName.nameTitleNonograms,
    url: messages.projectUrl.urlNonograms,
  },
  {
    image: FunChat,
    name: messages.projectName.nameTitleFunChat,
    url: messages.projectUrl.urlFunChat,
  },
  {
    image: Ecommerce,
    name: messages.projectName.nameTitleEcommerce,
    url: messages.projectUrl.urlEcommerce,
  },
  {
    image: SimonSays,
    name: messages.projectName.nameTitleSimonSays,
    url: messages.projectUrl.urlSimonSays,
  },
  {
    image: ChristmasShop,
    name: messages.projectName.nameTitleChristmasShop,
    url: messages.projectUrl.urlChristmas,
  },
  {
    image: Decision,
    name: messages.projectName.nameTitleDecision,
    url: messages.projectUrl.urlDecision,
  },
];

import { createBrowserRouter } from "react-router-dom";
import { PagePath } from "./enums";
import { Root } from "./root/root";
import { HomePage } from "../pages/home-page/home-page";
import { NotFoundPage } from "../pages/not-found-page/not-found-page";
import { DeploysPage } from "@/pages/deploys-page/deploys-page";
import { AboutPage } from "@/pages/about-page/about-page";
import { ContactPage } from "@/pages/contact-page/contact-page";

export const router = createBrowserRouter([
  {
    path: PagePath.root,
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: PagePath.notFound, Component: NotFoundPage },
      { path: PagePath.deploysPage, Component: DeploysPage },
      { path: PagePath.aboutPage, Component: AboutPage },
      { path: PagePath.contactPage, Component: ContactPage },
    ],
  },
  {
    path: PagePath.notFound,
    Component: NotFoundPage,
  },
]);

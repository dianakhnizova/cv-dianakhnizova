import { messages } from "./messages";
import type { SkillItems } from "./types";

export const skillItemsList: SkillItems[] = [
  {
    label: messages.labelCoreTech,
    skills: [
      { skill: messages.skillsLabels.skillJs },
      { skill: messages.skillsLabels.skillTs },
      { skill: messages.skillsLabels.skillHTML },
      { skill: messages.skillsLabels.skillCss },
      { skill: messages.skillsLabels.skillDOM },
    ],
  },
  {
    label: messages.labelFrameworks,
    skills: [
      { skill: messages.skillsLabels.skillReact },
      { skill: messages.skillsLabels.skillState },
    ],
  },
  {
    label: messages.labelTooling,
    skills: [
      { skill: messages.skillsLabels.skillGit },
      { skill: messages.skillsLabels.skillWebPack },
      { skill: messages.skillsLabels.skillVite },
      { skill: messages.skillsLabels.skillNetlify },
    ],
  },
  {
    label: messages.labelApi,
    skills: [
      { skill: messages.skillsLabels.skillRestApi },
      { skill: messages.skillsLabels.skillWebSocket },
    ],
  },
  {
    label: messages.labelDesign,
    skills: [
      { skill: messages.skillsLabels.skillFigma },
      { skill: messages.skillsLabels.skillPixelPerfect },
    ],
  },
];

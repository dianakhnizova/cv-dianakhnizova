import axios from "axios";
import type { UserData, UserReposData } from "@/pages/git-hub-page/types";

export const fetchUserData = async (setUser: (user: UserData) => void) => {
  try {
    const response = await axios.get<UserData>(
      "https://api.github.com/users/dianakhnizova",
    );
    setUser(response.data);
  } catch {
    console.log("error");
  }
};

export const fetchUserRepos = async (
  setRepos: (repos: UserReposData[]) => void,
  term?: string,
) => {
  try {
    const url = `https://api.github.com/users/dianakhnizova/repos`;
    const response = await axios.get<UserReposData[]>(url);

    let data = response.data;

    if (term) {
      const lowerTerm = term.toLowerCase();
      data = data.filter((repo) => repo.name.toLowerCase().includes(lowerTerm));
    }

    setRepos(data);
  } catch {
    console.log("error");
  }
};

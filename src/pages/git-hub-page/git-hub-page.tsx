import { useEffect, useState } from "react";
import styles from "./git-hub-page.module.css";
import type { UserData, UserReposData } from "./types";
import { fetchUserData, fetchUserRepos } from "@/api/fetch-git-hub";
import { SearchItem } from "./components/search-item/search-item";
import { GitHubTitle } from "./components/git-hub-title/git-hub-title";
import { GitHubRepo } from "./components/git-hub-repo/git-hub-repo";

export const GitHubPage = () => {
  const [searchRepo, setSearchRepo] = useState("");
  const [user, setUser] = useState<UserData | null>(null);
  const [repos, setRepos] = useState<UserReposData[]>([]);

  useEffect(() => {
    void fetchUserData(setUser);
    void fetchUserRepos(setRepos);
  }, []);

  return (
    <div className={styles.container}>
      <GitHubTitle user={user} />
      <SearchItem
        searchRepo={searchRepo}
        setRepos={setRepos}
        setSearchRepo={setSearchRepo}
      />
      <GitHubRepo repos={repos} />
    </div>
  );
};

import styles from "./search-item.module.css";
import { messages } from "./messages";
import { Button } from "@/components/button/button";
import { fetchUserRepos } from "@/api/fetch-git-hub";
import type { UserReposData } from "../../types";

interface Props {
  searchRepo: string;
  setRepos: (repos: UserReposData[]) => void;
  setSearchRepo: (value: string) => void;
}

export const SearchItem = ({ searchRepo, setRepos, setSearchRepo }: Props) => {
  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchRepo(value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        value={searchRepo}
        onChange={handleSearchInput}
        type="text"
        placeholder={messages.findPlaceholder}
        className={styles.input}
      />

      <Button
        onClick={() => {
          void fetchUserRepos(setRepos, searchRepo);
        }}
      >
        {messages.findButton}
      </Button>
    </div>
  );
};

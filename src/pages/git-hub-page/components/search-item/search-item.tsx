import styles from './search-item.module.css';
import { messages } from './messages';
import { Button } from '@/components/button/Button';
import { fetchUserRepos } from '@/api/fetch-git-hub';
import type { UserReposData } from '../../types';

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetchUserRepos(setRepos, searchRepo);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <input
        value={searchRepo}
        onChange={handleSearchInput}
        type="text"
        placeholder={messages.findPlaceholder}
        className={styles.input}
      />

      <Button type="submit">{messages.findButton}</Button>
    </form>
  );
};

import { useState } from "react";
import styles from "./Search.module.less";

interface SearchProps {
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
}

const Search = ({ globalFilter, setGlobalFilter }: SearchProps) => {
  const [inputValue, setInputValue] = useState(globalFilter);

  const handleSearch = () => {
    setGlobalFilter(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className={styles.searchInput}
      />
      <div className={styles.searchButton} onClick={handleSearch}>
        검색
      </div>
    </div>
  );
};

export default Search;

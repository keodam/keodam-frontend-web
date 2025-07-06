import styles from './TableNavigation.module.less';

interface TableNavigationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const TableNavigation = ({ currentPage, totalPages, setCurrentPage }: TableNavigationProps) => {
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className={styles.tableNavigation}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={styles.navButton}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`${styles.navButton} ${currentPage === page ? styles.active : ''}`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={styles.navButton}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default TableNavigation;

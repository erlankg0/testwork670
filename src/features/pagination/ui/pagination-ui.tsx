import styles from './pagination.module.scss';
import { MoveLeft, MoveRight } from 'lucide-react';

export function PaginationUI({ page, pageCount }: { page: number; pageCount: number }) {
  const pages: (number | 'ellipsis')[] = [];

  // Добавляем первые страницы
  pages.push(1);
  if (pageCount >= 2) pages.push(2);

  if (pageCount > 4) {
    pages.push('ellipsis');
    pages.push(pageCount - 1);
    pages.push(pageCount);
  } else {
    for (let i = 3; i <= pageCount; i++) {
      pages.push(i);
    }
  }

  // Функция для рендера кнопки
  const renderPageButton = (p: number | 'ellipsis') => {
    if (p === 'ellipsis') {
      return (
        <span key="ellipsis" className={styles.ellipsis}>
          …
        </span>
      );
    }
    const isActive = p === page;
    return (
      <a
        key={p}
        href={`?page=${p}`}
        className={`${styles.pageButton} ${isActive ? styles.active : ''}`}
        aria-current={isActive ? 'page' : undefined}
      >
        {p}
      </a>
    );
  };

  return (
    <div className={styles.pagination}>
      <a
        href={`?page=1`}
        className={`${styles.pageButton} ${page === 1 ? styles.disabled : ''}`}
        aria-disabled={page === 1}
      >
        <MoveLeft size={10} />
      </a>

      {pages.map((p) => renderPageButton(p))}

      <a
        href={`?page=${pageCount}`}
        className={`${styles.pageButton} ${page === pageCount ? styles.disabled : ''}`}
        aria-disabled={page === pageCount}
      >
        <MoveRight size={10} />
      </a>
    </div>
  );
}

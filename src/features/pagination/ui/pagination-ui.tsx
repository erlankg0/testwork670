import styles from './pagination.module.scss';
import { MoveLeft, MoveRight } from 'lucide-react';

export function PaginationUI({
                               page,
                               pageCount,
                             }: {
  page: number;
  pageCount: number;
}) {
  const pages: (number | 'ellipsis')[] = [];

  // Если страниц мало, показываем все
  if (pageCount <= 7) {
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
  } else {
    // Всегда показываем первую страницу
    pages.push(1);

    // Определяем диапазон страниц вокруг текущей
    let start = Math.max(2, page - 1);
    let end = Math.min(pageCount - 1, page + 1);

    // Если текущая страница близко к началу
    if (page <= 3) {
      start = 2;
      end = 4;
    }
    // Если текущая страница близко к концу
    else if (page >= pageCount - 2) {
      start = pageCount - 3;
      end = pageCount - 1;
    }

    // Добавляем многоточие после первой страницы, если нужно
    if (start > 2) {
      pages.push('ellipsis');
    }

    // Добавляем страницы в диапазоне
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Добавляем многоточие перед последней страницей, если нужно
    if (end < pageCount - 1) {
      pages.push('ellipsis');
    }

    // Всегда показываем последнюю страницу
    if (pageCount > 1) {
      pages.push(pageCount);
    }
  }

  // Функция для рендера кнопки
  const renderPageButton = (p: number | 'ellipsis', index: number) => {
    if (p === 'ellipsis') {
      return (
        <span key={`ellipsis-${index}`} className={styles.ellipsis}>
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
      {/* Кнопка "Предыдущая" */}
      <a
        href={`?page=${Math.max(page - 1, 1)}`}
        className={`${styles.pageButton} ${page === 1 ? styles.disabled : ''}`}
        aria-disabled={page === 1}
      >
        <MoveLeft size={10} />
      </a>

      {/* Страницы */}
      {pages.map((p, index) => renderPageButton(p, index))}

      {/* Кнопка "Следующая" */}
      <a
        href={`?page=${Math.min(page + 1, pageCount)}`}
        className={`${styles.pageButton} ${page === pageCount ? styles.disabled : ''}`}
        aria-disabled={page === pageCount}
      >
        <MoveRight size={10} />
      </a>
    </div>
  );
}
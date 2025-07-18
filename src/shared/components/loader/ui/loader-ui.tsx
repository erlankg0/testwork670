import { forwardRef } from 'react';
import { Loader } from 'lucide-react';
import styles from './loader.module.scss';

export const LoaderUI = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className={styles.loaderContainer}>
      <Loader className={styles.spinner} />
    </div>
  );
});

LoaderUI.displayName = 'LoaderUI';

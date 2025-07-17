import styles from './topbar.module.scss';
import clsx from 'clsx';
import { Phone } from 'lucide-react';

export function TopbarUI() {
  return (
    <div className={clsx(styles.topbar)}>
      <div>
        <div>
          <Phone />
        </div>
      </div>
    </div>
  );
}
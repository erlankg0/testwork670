import styles from './topbar.module.scss';
import { Phone, Mail, MapPin } from 'lucide-react';
import { InfoLineUI } from '@/shared/components/infoLine';
import { Container } from '@/shared/components/container';

export function TopbarUI() {
  return (
    <div className={styles.topbar}>
      <Container>
        <div className={styles.topbar__contacts}>
          <InfoLineUI icon={Phone} info={'021-95-64-648'} type={'tel'} />
          <InfoLineUI icon={Mail} info={'shop@abelohost.com'} type={'email'} />
          <InfoLineUI icon={MapPin} info={'1734 Stonecaol Road'} type={'address'} />
        </div>
      </Container>
    </div>
  );
}
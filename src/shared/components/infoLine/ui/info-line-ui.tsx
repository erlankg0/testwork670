import type { InfoLinePros } from '../model/types';
import styles from './infoLine.module.scss';

export function InfoLineUI(props: InfoLinePros) {
  const { info, type, icon: Icon } = props;

  const getHref = () => {
    if (type === 'tel' || type === 'email') {
      return `${type}:${info}`;
    }
    return undefined;
  };

  return (
    <div className={styles.infoLine}>
      <Icon className={styles.icon} />
      {type === 'tel' || type === 'email' ? (
        <a href={getHref()} className={styles.infoLine__info}>{info}</a>
      ) : (
        <p className={styles.infoLine__info}>{info}</p>  // <-- здесь была ошибка
      )}
    </div>
  );
}
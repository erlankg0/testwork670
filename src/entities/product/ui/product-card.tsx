import styles from './product-card.module.scss';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

export function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <img src={image} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>${price}</p>
    </article>
  );
}

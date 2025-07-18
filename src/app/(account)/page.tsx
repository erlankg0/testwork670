import styles from './home.module.scss';
import { ProductCard } from '@/entities/product/ui/product-card';

export default async function Page() {

  return (
    <section className={styles.page}>
      <h2>Last Products</h2>
      <div>
        <ProductCard />
      </div>
    </section>
  );
}
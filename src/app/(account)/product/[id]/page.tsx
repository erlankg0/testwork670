import { notFound } from 'next/navigation';
import axiosInstance from '@/lib/axios';
import type { ProductType } from '@/entities/product';
import styles from './page.module.scss';

type Props = {
  params: { id: string };
};

export default async function ProductPage({ params }: Props) {
  const id = params.id;

  try {
    const response = await axiosInstance.get<ProductType>(`/products/${id}`);
    const product = response.data;

    return (
      <div className={styles.page}>
        <div className={styles.productCard}>
          <div className={styles.imageContainer}>
            <img src={product.images[0]} alt={product.title} className={styles.thumbnail} />
          </div>

          <div className={styles.details}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.description}>{product.description}</p>

            <div className={styles.tags}>
              {product.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>

            <p className={styles.brand}>Brand: {product.brand}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

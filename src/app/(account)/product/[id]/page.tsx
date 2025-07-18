import { notFound } from 'next/navigation';
import axiosInstance from '@/lib/axios';
import type { ProductType } from '@/entities/product';
import styles from './page.module.scss';
import Image from 'next/image';

type Props = {
  params: Promise<{
    id: string;
  }>;
};



export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  try {
    const response = await axiosInstance.get<ProductType>(`/products/${id}`);
    const product = response.data;

    return (
      <div className={styles.page}>
        <div className={styles.productCard}>
          <div className={styles.imageContainer}>
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={440}
              height={240}
              className={styles.thumbnail}
            />
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
  } catch {
    notFound();
  }
}

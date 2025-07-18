"use client";
import { useState } from 'react';
import styles from './product-card.module.scss';
import type { ProductType } from '../model/types';
import Link from 'next/link';

export function ProductCard({ title, price, thumbnail, id, brand }: ProductType) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <article className={styles.card}>
      <Link href={`/product/${id}`}>
        <div className={styles.imageWrapper}>
          {!imgLoaded && <div className={styles.skeleton} />}
          <img
            src={thumbnail}
            alt={title}
            onLoad={() => setImgLoaded(true)}
            className={imgLoaded ? styles.imgVisible : styles.imgHidden}
            loading="lazy"
          />
        </div>
      </Link>

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>${price}</p>
        <p className={styles.brand}>{brand}</p>
      </div>
    </article>
  );
}

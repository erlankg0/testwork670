import { Container } from '@/shared/components';
import { ProductCard, ProductsResponse } from '@/entities/product';
import axiosInstance from '@/lib/axios';
import styles from '../../home.module.scss';
import { PaginationUI } from '@/features/pagination';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

const LIMIT = 12;

export default async function Page({ searchParams, params }: Props) {
  const { slug } = await params;
  const { page } = await searchParams;
  const pages = Number(page || '1');
  const skip = (pages - 1) * LIMIT;

  const response = await axiosInstance.get<ProductsResponse>(`/products/category/${slug}`, {
    params: { limit: LIMIT, skip },
  });

  const { products, total } = response.data;
  const pageCount = Math.ceil(total / LIMIT);

  return (
    <section className={styles.page}>
      <h2 className={styles.page__title}>{slug.toUpperCase()}</h2>
      {products.length && (
        <Container>
          <div className={styles.products}>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <PaginationUI page={pages} pageCount={pageCount} />
        </Container>
      )}

    </section>
  );
}

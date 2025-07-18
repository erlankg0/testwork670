export type ResponseData<T> = {
  data: T[],
  page: number,
  pageCount: number,
}
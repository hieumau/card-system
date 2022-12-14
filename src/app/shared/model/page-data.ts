export class PageData<T> {
  page: number
  per_page?: number
  total?: number
  total_page?: number
  data: T[] = []

}

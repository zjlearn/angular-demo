export class PageBean {
  private pagination: Pagination;
  private result: object [];
}


export class Pagination {
  page: number;
  size: number;
  totalPage: number;
  total: number;
}

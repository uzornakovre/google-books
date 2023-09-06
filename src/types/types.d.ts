interface ISearchData {
  keyword: string;
  category: string;
  sortBy: string;
  startIndex: number;
}

interface IBook {
  id: string;
  title: string;
  image?: string;
  imageSmall?: string;
  categories?: Array<string>;
  description?: string;
  authors: Array<string>;
}
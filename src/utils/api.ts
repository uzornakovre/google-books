import { API_KEY, BASE_URL, HEADERS } from "./constants";

const checkResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((err: any) => Promise.reject(err));
  }
};

export const getBooks = (
  keyword: string,
  category: string,
  sortBy: string,
  startIndex: number,
): Promise<any> => {
  return fetch(
    `${BASE_URL}?q=${keyword}+subject:${category}&orderBy${sortBy}&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`,
    {
      headers: HEADERS,
    }
  )
    .then((res) => checkResponse<any>(res))
    .then((data) => {
      console.log(data);
      return data;
    });
};

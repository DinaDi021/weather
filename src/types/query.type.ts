export interface IQuery {
  lat: number;
  lon: number;
  city: string;
  limit: number;
  lang?: string;
  exclude?: string;

  [key: string]: string | number;
}

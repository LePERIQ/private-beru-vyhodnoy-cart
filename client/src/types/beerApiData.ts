export type Draft = {
  i: string;
  c: string;
  p: string;
  t: string;
  s: string;
  d: string;
  a: string;
  m: string;
  tap: string;
};

export type Bottle = {
  i: string;
  c: string;
  p: string;
  t: string;
  s: string;
  d: string;
  a: string;
  m: string;
  tap: string;
};

export type Data = {
  draft: Draft[];
  bottles: Bottle[];
};

export type BeerShopDataType = {
  shop_id?: number;
  data: Data;
};

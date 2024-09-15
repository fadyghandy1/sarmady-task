export interface ProductsGetResponse {
  name: string;
  metatype: string;
  comment: string;
  translationid: string;
  errors: any;
  data: ProductInfo[];
}
export interface ProductInfo {
  dcscode: string;
  description1: string;
  description2: string;
  invnquantity: [];
  itemsize: string;
  rowversion: number;
  sid: string;
  upc: string;
  vendorcode: string;
  attribute: string;
  actstrprice: number;
  actstrpricewt: number;
  alu: string;
  vendsid: string;
  dcssid: number;
  cost: number;
  taxcodesid: number;
  active: boolean;
  imagepath: string;
}
export interface DCSGetResponse {
  comment: string;
  data: DSCCodeInfo[];
  errors: null;
  metatype: string;
  name: string;
  translationid: string;
}
export interface DSCCodeInfo {
  dcscode: string;
  sid: number;
}

export interface ImageInfo {}

export interface SubsiderInfo {
  
}

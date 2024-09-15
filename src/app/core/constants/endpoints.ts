import { environment } from '../../../environments/environment';

const baseUrl = environment.baseUrl;
export class Endpoints {
  static readonly AUTH_REQ1 = `${environment.baseUrl}/v1/rest/auth`;
  static readonly AUTH_REQ2 = `${environment.baseUrl}/v1/rest/auth`;
  static readonly AUTH_REQ3 = `${environment.baseUrl}/v1/rest/session`;
  static readonly AUTH_REQ4 = `${environment.baseUrl}/v1/rest/sit?ws=webclient`;
  static readonly CUSTOMERS = `${environment.baseUrl}/api/common/customer`;
  static readonly PRODUCTS = `${environment.baseUrl}/api/backoffice/inventory`;
  static readonly VENDORS = `${environment.baseUrl}/api/backoffice/vendor`;
  static readonly TAXS = `${environment.baseUrl}/rest/taxcode`;
  static readonly DSCCODE = `${environment.baseUrl}/api/backoffice/dcs`;
  static readonly DEPARTMENTS = `${environment.baseUrl}/api/backoffice/dcs`;
  static readonly TAXES = `${environment.baseUrl}/v1/rest/taxcode`;
  static readonly GETIMAGES = `${environment.baseUrl}/api/common`;
  static readonly SUBSIDER = `${environment.baseUrl}/v1/rest/subsidiary`;
  static readonly TRANSACTION = `${environment.baseUrl}/v1/rest/document`;
  static readonly EMPLOYEE = `${environment.baseUrl}/api/common/employee`;
  static readonly BACKOFFICE = `${baseUrl}/api/backoffice`;
  static readonly SUBSIDERY = `${baseUrl}/v1/rest/subsidiary`;
  static readonly STORES = `${baseUrl}/v1/rest/store`;
  static readonly RPC1 = `${baseUrl}/v1/rpc`;
}

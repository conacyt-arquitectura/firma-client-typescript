// tslint:disable
/**
 * firma API
 * firma API documentation
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: roberto.villarejo@comimsa.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from './base';

/**
 *
 * @export
 * @interface Request
 */
export interface Request {
  /**
   *
   * @type {string}
   * @memberof Request
   */
  data?: string;
  /**
   *
   * @type {string}
   * @memberof Request
   */
  signature?: string;
}
/**
 *
 * @export
 * @interface SubjectInfo
 */
export interface SubjectInfo {
  /**
   *
   * @type {string}
   * @memberof SubjectInfo
   */
  certificate?: string;
  /**
   *
   * @type {string}
   * @memberof SubjectInfo
   */
  curp?: string;
  /**
   *
   * @type {string}
   * @memberof SubjectInfo
   */
  rfc?: string;
}
/**
 *
 * @export
 * @interface VerifyMultipleSignatureRequest
 */
export interface VerifyMultipleSignatureRequest {
  /**
   *
   * @type {string}
   * @memberof VerifyMultipleSignatureRequest
   */
  callbackUrl?: string;
  /**
   *
   * @type {Array<Request>}
   * @memberof VerifyMultipleSignatureRequest
   */
  requests?: Array<Request>;
  /**
   *
   * @type {SubjectInfo}
   * @memberof VerifyMultipleSignatureRequest
   */
  subjectInfo?: SubjectInfo;
}
/**
 *
 * @export
 * @interface VerifySignatureRequest
 */
export interface VerifySignatureRequest {
  /**
   *
   * @type {string}
   * @memberof VerifySignatureRequest
   */
  data?: string;
  /**
   *
   * @type {string}
   * @memberof VerifySignatureRequest
   */
  signature?: string;
  /**
   *
   * @type {SubjectInfo}
   * @memberof VerifySignatureRequest
   */
  subjectInfo?: SubjectInfo;
}

/**
 * FirmaApi - axios parameter creator
 * @export
 */
export const FirmaApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary validate
     * @param {string} certificate certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validate: async (
      certificate: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'certificate' is not null or undefined
      if (certificate === null || certificate === undefined) {
        throw new RequiredError(
          'certificate',
          'Required parameter certificate was null or undefined when calling validate.'
        );
      }
      const localVarPath = `/api/validation/certificate`;
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'text/plain';

      localVarUrlObj.query = {
        ...localVarUrlObj.query,
        ...localVarQueryParameter,
        ...options.query,
      };
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      const needsSerialization =
        typeof certificate !== 'string' ||
        localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(certificate !== undefined ? certificate : {})
        : certificate || '';

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary verify
     * @param {VerifySignatureRequest} req req
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verify: async (
      req: VerifySignatureRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'req' is not null or undefined
      if (req === null || req === undefined) {
        throw new RequiredError(
          'req',
          'Required parameter req was null or undefined when calling verify.'
        );
      }
      const localVarPath = `/api/validation/signature`;
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      localVarUrlObj.query = {
        ...localVarUrlObj.query,
        ...localVarQueryParameter,
        ...options.query,
      };
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      const needsSerialization =
        typeof req !== 'string' ||
        localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(req !== undefined ? req : {})
        : req || '';

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary verify
     * @param {VerifyMultipleSignatureRequest} req req
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyMultiple: async (
      req: VerifyMultipleSignatureRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'req' is not null or undefined
      if (req === null || req === undefined) {
        throw new RequiredError(
          'req',
          'Required parameter req was null or undefined when calling verifyMultiple.'
        );
      }
      const localVarPath = `/api/validation/signatures`;
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      localVarUrlObj.query = {
        ...localVarUrlObj.query,
        ...localVarQueryParameter,
        ...options.query,
      };
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      const needsSerialization =
        typeof req !== 'string' ||
        localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(req !== undefined ? req : {})
        : req || '';

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * FirmaApi - functional programming interface
 * @export
 */
export const FirmaApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary validate
     * @param {string} certificate certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async validate(
      certificate: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>
    > {
      const localVarAxiosArgs = await FirmaApiAxiosParamCreator(
        configuration
      ).validate(certificate, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     *
     * @summary verify
     * @param {VerifySignatureRequest} req req
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async verify(
      req: VerifySignatureRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>
    > {
      const localVarAxiosArgs = await FirmaApiAxiosParamCreator(
        configuration
      ).verify(req, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     *
     * @summary verify
     * @param {VerifyMultipleSignatureRequest} req req
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async verifyMultiple(
      req: VerifyMultipleSignatureRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await FirmaApiAxiosParamCreator(
        configuration
      ).verifyMultiple(req, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
  };
};

/**
 * FirmaApi - factory interface
 * @export
 */
export const FirmaApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary validate
     * @param {string} certificate certificate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validate(certificate: string, options?: any): AxiosPromise<string> {
      return FirmaApiFp(configuration)
        .validate(certificate, options)
        .then(request => request(axios, basePath));
    },
    /**
     *
     * @summary verify
     * @param {VerifySignatureRequest} req req
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verify(req: VerifySignatureRequest, options?: any): AxiosPromise<string> {
      return FirmaApiFp(configuration)
        .verify(req, options)
        .then(request => request(axios, basePath));
    },
    /**
     *
     * @summary verify
     * @param {VerifyMultipleSignatureRequest} req req
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyMultiple(
      req: VerifyMultipleSignatureRequest,
      options?: any
    ): AxiosPromise<void> {
      return FirmaApiFp(configuration)
        .verifyMultiple(req, options)
        .then(request => request(axios, basePath));
    },
  };
};

/**
 * FirmaApi - object-oriented interface
 * @export
 * @class FirmaApi
 * @extends {BaseAPI}
 */
export class FirmaApi extends BaseAPI {
  /**
   *
   * @summary validate
   * @param {string} certificate certificate
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FirmaApi
   */
  public validate(certificate: string, options?: any) {
    return FirmaApiFp(this.configuration)
      .validate(certificate, options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary verify
   * @param {VerifySignatureRequest} req req
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FirmaApi
   */
  public verify(req: VerifySignatureRequest, options?: any) {
    return FirmaApiFp(this.configuration)
      .verify(req, options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary verify
   * @param {VerifyMultipleSignatureRequest} req req
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FirmaApi
   */
  public verifyMultiple(req: VerifyMultipleSignatureRequest, options?: any) {
    return FirmaApiFp(this.configuration)
      .verifyMultiple(req, options)
      .then(request => request(this.axios, this.basePath));
  }
}

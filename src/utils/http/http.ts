import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { CloudHttpError, RequestMethods, CloudHttpResoponse, CloudHttpRequestConfig } from "#/http";
import qs from "qs";

const defaultConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  },
  // 数组格式参数序列化
  paramsSerializer: (params) => qs.stringify(params, { indices: false })
};

class CloudHttp {
  constructor() {

  }
  // 初始化配置对象
  private static initConfig: CloudHttpRequestConfig = {}
  // 保存当前Axios实例对象
  private static axiosInstance: AxiosInstance = Axios.create(defaultConfig)

  // 请求拦截
  private httpInterceptorsRequest(): void {
    CloudHttp.axiosInstance.interceptors.request.use(
      (config: CloudHttpRequestConfig) => {
        const $config = config;
        if (typeof config.beforeRequestCallback === "function") {
          config.beforeRequestCallback($config);
          return $config;
        }
        if (CloudHttp.initConfig.beforeRequestCallback) {
          CloudHttp.initConfig.beforeRequestCallback($config);
          return $config;
        }
        return $config;
      },
      (error) => {
        return Promise.reject(error);
      }
    )
  }
  // 响应拦截
  private httpInterceptorsResponse(): void {
    const instance = CloudHttp.axiosInstance;
    instance.interceptors.response.use(
      (response: CloudHttpResoponse) => {
        const $config = response.config;
        if (typeof $config.beforeResponseCallback === "function") {
          $config.beforeResponseCallback(response);
          return response.data;
        }
        if (CloudHttp.initConfig.beforeResponseCallback) {
          CloudHttp.initConfig.beforeResponseCallback(response);
          return response.data;
        }
        return response.data;
      },
      (error: CloudHttpError) => {
        const $error = error;
        $error.isCancelRequest = Axios.isCancel($error);
        // 所有的响应异常 区分来源为取消请求/非取消请求
        return Promise.reject($error);
      }
    );
  }

  public request<T> (
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: CloudHttpRequestConfig
  ): Promise<T> {
    const config = {
      method,
      url,
      ...param,
      ...axiosConfig
    } as CloudHttpRequestConfig;
    return new Promise((resolve, reject) => {
      CloudHttp.axiosInstance.request(config).then((response: any) => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }

  // 单独抽离的post工具函数
  public post<T, P>(url: string, params?: T, config?: CloudHttpRequestConfig): Promise<P> {
    return this.request<P>("post", url, params, config);
  }

  // 单独抽离的get工具函数
  public get<T, P>(url: string, params?: T, config?: CloudHttpRequestConfig): Promise<P> {
    return this.request<P>("get", url, { params }, config);
  }
}

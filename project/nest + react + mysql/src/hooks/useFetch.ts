import { useState, useEffect, useRef } from 'react'
import axios, { AxiosRequestConfig, AxiosResponse, CancelTokenSource, Canceler } from 'axios'

interface useAxiosConfig extends AxiosRequestConfig {
    cancelable?: boolean;
}

interface useAxiosReturnObj<T = any> {
    response?: AxiosResponse<T>;
    loading: boolean;
    error: boolean;
    cancelFn?: Canceler;
    refetchFn: (params?: any) => void;
}

// 表示元组具有一个可选的 boolean 类型数组项和随后任意多个任意类型元素
type useAxiosDeps = [boolean?, ...any[]];

const isPlainObject = (val: any): val is Object => {
    return !!val && typeof val === 'object' && val.constructor === Object;
};

/**
 * @template T 请求结果类型定义
 * @param { useAxiosConfig } config 请求配置，继承了 axios 的请求配置对象
 * @param { boolean } config.cancelable 是否需要取消请求的功能，设置为true时，外部可接收一个cancelFn方法对请求进行取消
 * @param { useAxiosDeps } deps 依赖项数组
 * @param { boolean } deps[0] 数组第一项为是否发起初始化请求
 * @return { useAxiosReturnObj } 返回值
 */

export const useAxios = <T = any>(
    config: useAxiosConfig,
    deps: useAxiosDeps
): useAxiosReturnObj<T> => {

    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<AxiosResponse<T>>();
    const [error, setError] = useState<boolean>(false);
    const { cancelable = false, ...axiosConfig } = config;

    const cancelRef = useRef<CancelTokenSource>();

    if (cancelable) {
        cancelRef.current = axios.CancelToken.source();
    }

    const fetch = (params?: any) => {
        if (!isPlainObject(params)) {
            params = {};
        }
        setLoading(true);
        axios.request<T>({
            ...axiosConfig,
            data: { ...axiosConfig.data, ...params },
            cancelToken: cancelRef.current?.token,
        })
            .then((res) => setResponse(res))
            .catch((e) => {
                console.log(e);
                setError(true)
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        const [initialRequest = true] = deps;
        if (initialRequest) {
            fetch();
        }
    }, deps);

    useEffect(() => {
        return () => cancelRef.current?.cancel();
    }, []);

    const returnValues: useAxiosReturnObj = {
        response,
        loading,
        error,
        refetchFn: fetch,
    };

    if (cancelable) {
        returnValues.cancelFn = cancelRef.current?.cancel
    }

    return returnValues
}
import { getFly } from './config'
import env from '@/config/env'

export const configData = {
    imgHost: env.baseUrl,
    host: `${env.baseUrl}/api/`
}

export const apiList = {

}

const host = configData.host;

// 通用的get请求
export const get = (params) => {
    return getFly(true).get(`${host}${params.url}`, params.data)
};

// 通用的post请求
export const post = (params) => {
    return getFly(true).post(`${host}${params.url}`, params.data)
};

// 不带load的get
export const getNoLoad = (params) => {
    return getFly().get(`${host}${params.url}`, params.data)
};

// 不带load的post
export const postNoLoad = (params) => {
    return getFly().post(`${host}${params.url}`, params.data)
};

export function NewGet(params) {
    return new Promise((resolve, reject) => {
        getFly(true).get(`${host}${params.url}`, params.data)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
    });
}

export function NewPost(params) {
    return new Promise((resolve, reject) => {
        getFly(true).post(`${host}${params.url}`, params.data)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
    });
}
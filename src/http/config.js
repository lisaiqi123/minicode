/*
    fly配置文件
*/
//引入 fly
import Fly from "flyio/dist/npm/wx";
import store from '@/store/index.js'

export const getFly = function getFly(showLoading = false) {
    let fly = new Fly();
    fly.config.timeout = 20000;
    // //定义公共headers
    // fly.config.headers={xx:5,bb:6,dd:7}
    //添加请求拦截器
    fly.interceptors.request.use((request) => {
            //如果过期 提示登录过期，需要重新登录 
            if (!loginStatus() && !request.url.includes('auth/token')) {
                showPopup('登录状态已过期，请重新登录！')
                outLogin()
                setTimeout(() => {
                    wx.reLaunch({
                        url: '/pages/user/login/main'
                    })
                }, 2000);
            }

            //给所有请求添加自定义header
            if (showLoading) {
                wx.showLoading({
                    title: '加载中',
                });
            }
            if (store.state.token) {
                request.headers["token"] = store.state.token;
            }
            //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
            return request;
        })
        //添加响应拦截器，响应拦截器会在then/catch处理之前执行
    fly.interceptors.response.use(
        (response) => {
            //只将请求结果的data字段返回
            if (showLoading) {

                wx.hideLoading();
            }
            setTimeout(function() {
                store.commit('setLodingStatus', true)
            }, 2000)

            return response.data
        },
        (err) => {
            setTimeout(function() {
                store.commit('setLodingStatus', true)
            }, 2000)
            let message = err.response.data.message
            if (message.includes('Token') || message.includes('token')) {
                store.commit('setTokenStatus', false)
                showPopup('身份信息已失效，请重新登录！')
                outLogin()
                setTimeout(() => {
                    wx.reLaunch({
                        url: '/pages/user/login/main'
                    })
                }, 2000);
            }
            if (showLoading) {
                wx.hideLoading();
            }
            if (!store.state.tokenStatus) {
                return false
            }
            if (err.status === 500) {
                showPopup('服务器出小差了,请稍后再试！')
            }



        }
    )
    return fly
}
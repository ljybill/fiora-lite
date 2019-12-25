import fetch from "../utils/fetch";
import { userInfo } from "../model/mock";

const loginByPass = function (username, password) {
  return fetch('login', {
    username,
    password,
    os: '小程序',
    browser: '小程序',
    environment: '小程序',
  })
};

const loginByToken = function (token) {
  return fetch('loginByToken', {
    token,
    os: '小程序',
    browser: '小程序',
    environment: '小程序',
  })
};

const loginByGuest = function () {
  return fetch('guest', { os: '小程序', browser: '小程序', environment: '小程序' })
};

const register = function () { };

const logout = function () {
};

export { loginByPass, loginByToken, loginByGuest, register, logout };

export default {
  loginByPass, loginByToken, loginByGuest, register, logout
}

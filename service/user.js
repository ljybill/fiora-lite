import fetch from "../utils/fetch";
import { userInfo } from "../model/mock";

const loginByPass = function() {
  return Promise.resolve(userInfo);
};

const loginByToken = function() {};

export { loginByPass, loginByToken };

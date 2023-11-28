//统一管理咱们项目用户相关的接口
import request from '@/utils/request'
import type {
    GetSmartLightListResponse,
    AddSmartLightResponse
} from './type'
//项目用户相关的请求地址
enum API {
  LOGIN_URL = '/User/login',
  USERINFO_URL = '/User/GetUserInfo',
  LOGOUT_URL = '/User/LogOut',
  GETSMARTLIGHTLIST_URL = '/SmartLight/GetSmartLightList'
}

//获取智能灯列表接口
export const reqGetSmartLightList = () =>
  request.get<any,GetSmartLightListResponse>(API.GETSMARTLIGHTLIST_URL)

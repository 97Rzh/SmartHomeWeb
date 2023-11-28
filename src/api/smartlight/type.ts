//定义用户相关数据的ts类型
//用户登录接口携带参数的ts类型
export interface AddSmartLightData {
    deviceName: string
    location: string
}

//定义全部接口返回数据都拥有ts类型
export interface AddSmartLightResponse {
    status: boolean
    message: string
    //result: string
}

export interface SmartLightInfo {
    brightness: number;
    lightColor: string | null;
    colorTemperature: number;
    deviceID: number;
    deviceName: string;
    ipAddress: string | null;
    deviceType: string;
    location: string;
    isOn: boolean;
    runtime: string;
    lastOperationTime: string;
    connectionStatus: string | null;
    operationalStatus: string | null;
    controlMethod: string | null;
    powerStatus: string | null;
    current: number;
    voltage: number;
    power: number;
    id: number;
    createDate: string;
    updateDate: string;
}

//定义登录接口返回数据类型
export interface GetSmartLightListResponse {
    message: string
    status: boolean
    result: SmartLightInfo[]
}

//定义获取用户信息返回数据类型
export interface userInfoReponseData {

}
